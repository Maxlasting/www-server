module.exports = async () => {
  const config = require(__base + 'config')

  const redisInit = require(__base + 'redis')

  const redis = await redisInit(config.redis)

  console.log(`redis is connected`)

  const { app, router, io, server } = require(__base + 'app')

  app.use(async (ctx, next) => {
    ctx.redis = redis
    await next()
  })

  const { createRouterInit } = require(__base + 'decorators')

  createRouterInit(app, router, config.routes)

  const { join } = require('path')

  config.modules.map(m => join(__dirname, 'modules', m)).forEach(_ => require(_)(app))

  require(join(__dirname, 'signal'))(io, redis)

  server.listen(config.port, config.host, () => {
    console.log(`Server is running successfull at port: %d`, config.port)
  })

}
