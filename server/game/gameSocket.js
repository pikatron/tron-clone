const d3 = require('d3-timer');
const gameBoard = require('./gameBoard');

let io;

let intervalTimer;

function gameOver(event) {
  io.emit('gameOver', event);
  intervalTimer.stop();
}

function updateBoard() {
  const collisions = gameBoard.movePlayers();
  io.emit('updateBoard', gameBoard.getBoard());

  // check for winners
  if (collisions[0] && collisions[1]) {
    gameOver('tie');
  } else if (collisions[0]) {
    gameOver('player2win');
  } else if (collisions[1]) {
    gameOver('player1win');
  }
}

module.exports = {
  initial: _io => {
    io = _io;
    io.on('connect', socket => {
      // alert board of new player
      const player = gameBoard.newPlayer();

      // if player is null, too many players connected
      if (!player) return;

      socket.on('ready', () => {
        console.log('player ready');
        player.ready = true;

        // check if both players are ready
        if (gameBoard.arePlayersReady()) {
          console.log('game starting');
          gameBoard.start();
          intervalTimer = d3.interval(updateBoard, 250);
        }
      });
      socket.on('turn', direction => {
        // tell player is turning
        player.turn(direction);
      });
      socket.on('disconnect', () => {
        player.disconnect();
        // tell frontend game stopped if running
        if (intervalTimer) gameOver('playerDisconnect');
      });
    });
  },
};
