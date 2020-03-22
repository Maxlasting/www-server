module.exports = async (io, db) => {

  // await db.set('xx', 'hello', 10)

  // const db = new Map()

  // function findTargetSocket (socketId) {
  //   for (let key in io.sockets.sockets) {
  //     const targetSocket = io.sockets.sockets[key]
  //     if (targetSocket.id == socketId) {
  //       return targetSocket
  //     }
  //   }
  //   return null
  // }

  // io.on('connection', (socket) => {
  //   socket.on('disconnect', () => {
  //     if (db.has(socket.id)) {
  //       const data = db.get(socket.id)
  //       socket.to(data.room).emit('peer-leave', data)
  //       db.delete(socket.id)
  //     }
  //   })

  //   socket.on('message', (data) => {
  //     const { to } = data
  //     const targetSocket = findTargetSocket(to)
  //     if (targetSocket) {
  //       targetSocket.emit('message', data)
  //     }
  //   })

  //   socket.on('join', (room, uid) => {
  //     if (typeof room === 'undefined') {
  //       return socket.emit('joinfailled', '无效的 channel id')
  //     }

  //     const clientRooms = io.sockets.adapter.rooms[room]
  //     const clientLen = clientRooms ? Object.keys(clientRooms).length : 0

  //     if (db.has(socket.id)) {
  //       socket.emit('hasjoin', db.get(socket.id))
  //       return
  //     }

  //     for (let [key, value] of db) {
  //       if (value.uid === uid) {
  //         const targetSocket = findTargetSocket(key)
  //         if (targetSocket) {
  //           targetSocket.leave(room)
  //           targetSocket.emit('kick', 'joined on other device')
  //           db.delete(key)
  //           break
  //         }
  //       }
  //     }

  //     socket.join(room)

  //     const data = {
  //       uid,
  //       room,
  //       socket: socket.id
  //     }

  //     db.set(socket.id, data)



  //     if (clientLen == 0) {
  //       socket.emit('create', data)
  //     } else {
  //       const users = Object.keys(io.sockets.adapter.rooms[room].sockets)
  //       socket.to(room).emit('peer-online',  { ...data, users })
  //     }

  //     const users = Object.keys(io.sockets.adapter.rooms[room].sockets).filter( _ => _ != socket.id)

  //     socket.emit('joined', { ...data, users })
  //   })

  //   socket.on('live', (room ,user) => {
  //     socket.live(room)

  //     socket.to(room).emit('peer-leave', db.get(socket.id))

  //     db.delete(socket.id)

  //     socket.emit('leaved', {
  //       id: socket.id,
  //       room,
  //       channel
  //     })
  //   })
  // })

}
