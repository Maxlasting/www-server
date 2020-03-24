const nanoid = require('nanoid')

const findSocket = (io, id) => {
  for (let key in io.sockets.sockets) {
    const item = io.sockets.sockets[key]
    if (item.id === id) {
      return item
    }
  }
  return null
}

const findOthers = (db, sockets) => {
  const arr = []
  return new Promise(async (resolve, reject) => {
    for (let i=0; i<sockets.length; i++) {
      const value = await db.get(sockets[i])
      if (value) {
        const { uid } = JSON.parse(value)
        arr.push(uid)
      }
      if (i == sockets.length - 1) resolve(arr)
    }
  })
}

module.exports = async (io, db) => {
  io.on('connect', (socket) => {
    socket.on('disconnect', async () => {
      const value = await db.get(socket.id)
      if (value) {
        const { channel, uid } = JSON.parse(value)
        await db.del(socket.id)
        await db.del(uid)
        socket.to(channel).emit('peer-out', {
          code: 0,
          peer: uid,
        })
      }
    })

    //

    socket.on('join', async (channel, uid) => {
      if (channel == null) {
        return socket.emit('joinerr', {
          code: 1,
          message: '无效的频道id'
        })
      }

      if (uid == null) uid = nanoid(10)

      const clientRooms = io.sockets.adapter.rooms[channel]
      const clientLen = clientRooms ? Object.keys(clientRooms).length : 0

      const check = await db.get(uid)

      if (check) {
        if (check == socket.id) {
          socket.emit('hasjoin', {
            code: 2,
            message: '当前用户已经在此房间内'
          })
          return
        } else {
          const socket = findSocket(io, check)
          if (socket) {
            socket.leave(channel)
            await db.del(uid)
            await db.del(check)
            socket.emit('kick', {
              code: 3,
              message: '其他设备登陆'
            })
          }
        }
      }

      socket.join(channel)

      const data = { channel, uid }

      await db.set(uid, socket.id)
      await db.set(socket.id, JSON.stringify(data))

      let others = Object.keys(io.sockets.adapter.rooms[channel].sockets).filter( _ => _ != socket.id)

      if (others.length) {
        others = await findOthers(db, others)
      }

      socket.emit('joined', { code: 0, uid, others })

      if (clientLen != 0) {
        socket.to(channel).emit('peer-in',  { code: 0, peer: uid })
      }
    })

    //

    socket.on('leave', async () => {
      const value = await db.get(socket.id)
      if (value) {
        const { uid, channel } = JSON.parse(value)
        socket.leave(channel)
        await db.del(uid)
        await db.del(socket.id)
        socket.emit('leaved', { code: 0, uid, })
        socket.to(channel).emit('peer-out', { code: 0, peer: uid, })
      }
    })

    //
    socket.on('message', async (data) => {
      const { from, to, connectionId, payload } = data
      const _to = await db.get(to)
      if (_to) {
        const socket = findSocket(io, _to)
        if (socket) {
          socket.emit('message', {
            code: 0, ...data
          })
        }
      }
    })

    //

    socket.on('unpublish', async () => {
      const values = await db.get(socket.id)
      const data = JSON.parse(values)
      socket.to(data.channel).emit('peer-unpublish',  { code: 0, peer: data.uid })
    })

    socket.on('publish', async () => {
      const values = await db.get(socket.id)
      const data = JSON.parse(values)
      socket.to(data.channel).emit('peer-publish',  { code: 0, peer: data.uid })
    })
  })
}



