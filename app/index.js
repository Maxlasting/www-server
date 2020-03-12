const Koa = require('koa')
const KoaRouter = require('koa-router')

const app = new Koa()

const router = new KoaRouter()

const server = require('http').createServer(app.callback())

const io = require('socket.io')(server)

module.exports = {
  app,
  router,
  io,
  server
}
