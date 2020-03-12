const routerMap = new Map()

const _setRouter = method => subPath => (target, key, descriptor) => {
  const configs = {
    method,
    subPath,
    target,
  }
  const controllers = target[key]

  routerMap.set(configs, controllers)

  return descriptor
}

const methods = ['get', 'post', 'del', 'put']

const methodsList = methods.reduce((ctx, key) => {
  ctx[key] = _setRouter(key)
  return ctx
}, {})

for (let key in methodsList) {
  exports[key] = methodsList[key]
}

const prefixer = Symbol('prefixer')

exports.prefix = path => target => target.prototype[prefixer] = path

const change2Arr = target => Array.isArray(target) ? target : [target]

const _covert = middleware => (target, key, descriptor) => {
  target[key] = change2Arr(middleware).concat(change2Arr(target[key]))
  return descriptor
}

exports.createRouterInit = (app, router, routes) => {
  const path = require('path')

  routes.map(route => path.join(__dirname, '..', 'routes', route)).forEach(require)

  for (let [configs, controllers] of routerMap) {
    const { method, subPath, target } = configs

    router[method](path.posix.join(target[prefixer] + subPath), ...change2Arr(controllers))
  }

  app.use(router.routes()).use(router.allowedMethods())

  return router
}

// ----------------------------------------------------------------------------------------------------

exports.required = (params) => _covert(async (ctx, next) => {
  let errs = []

  for (let key in params) {
    errs = errs.concat(params[key].filter(_ => !ctx.request[key][_]))
  }

  if (errs.length) {
    return ctx.throw(422, '请求数据被拒绝!')
  } else {
    await next()
  }
})


