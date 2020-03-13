const { prefix, get } = require(__base + 'decorators')

const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)
const { join } = require('path')
const send = require('koa-send')

@prefix('/')
class __defaultRouter__ {
  @get('/www/*')
  async _route_01_ (ctx) {
    console.log(ctx.path)
    await send(ctx, ctx.path)
  }

  @get('*')
  async _route_00_ (ctx) {
    ctx.type = 'text/html'

    const html = await readFile(
      join(__dirname, '..', 'www', 'index.html')
    )

    ctx.body = html
  }
}
