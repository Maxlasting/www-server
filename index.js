const { app, router, io, server } = require(__base + 'app')

const config = require(__base + 'config')

const { createRouterInit } = require(__base + 'decorators')

createRouterInit(app, router, config.routes)

const { join } = require('path')

config.modules.map(m => join(__dirname, 'modules', m)).forEach(_ => require(_)(app))

config.sockets.map(s => join(__dirname, 'sockets', s)).forEach(_ => require(_)(io))

server.listen(config.port, config.host, () => {
  console.log(`Server is running successfull at port: %d`, config.port)
})
