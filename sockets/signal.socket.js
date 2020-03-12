module.exports = (io, socket) => {
  socket.on('message', (data) => {
    const { room, payload } = data
    socket.to(room).emit('message', room, payload)
  })

  socket.on('join', (room) => {
    socket.join(room)
    const curtRoom = io.sockets.adapter.rooms[room] || {}
    const users = Object.keys(curtRoom.sockets).length
    if (users < 3) {
      socket.emit('joined', room, socket.id)
      if (users > 1) {
        socket.to(room).emit('otherjoin', room)
      }
    } else {
      socket.leave(room)
      socket.emit('full', room, socket.id)
    }
  })

  socket.on('live', (room) => {
    // const curtRoom = io.sockets.adapter.rooms[room] || {}
    // const users = Object.keys(curtRoom.sockets).length
    socket.to(room).emit('bye', room, socket.id)
    socket.emit('leaved', room, socket.id)
  })
}
