let io;

module.exports = {
  initial: _io => {
    io = _io;
    io.on('connect', socket => {
      console.log('connection');
      socket.on('turn', () => {
        console.log('turn');
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
