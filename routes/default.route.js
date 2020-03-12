const { prefix, get } = require(__base + 'decorators')

@prefix('/')
class __defaultRouter__ {
  @get('*')
  async _route_01_ (ctx) {
    ctx.body = 'ok'
  }
}
