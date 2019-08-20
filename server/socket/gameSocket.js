let io;

module.exports = {
  initial: _io => {
    io = _io;
    io.on('connect', socket => {
      console.log('connection');
      socket.on('move', () => {
        console.log('move');
      });
      socket.on('disconnect', () => {
        console.log('disconnected');
      });
    });
  },
  updateBoard: () => {
    io.emit('updateBoard');
  },
  gameOver: () => {
    io.emit('gameOver');
  },
};
