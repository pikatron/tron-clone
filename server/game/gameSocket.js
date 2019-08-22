/* eslint-disable no-use-before-define */
const d3 = require('d3-timer');
const gameBoard = require('./gameBoard');

const SPEED = 250;

let io;

class IntervalTimer {
  constructor() {
    this.timer = null;
  }

  startTimer() {
    this.timer = d3.interval(updateBoard, SPEED);
  }

  stopTimer() {
    if (!this.timer) return;
    this.timer.stop();
    this.timer = null;
  }
}

const intervalTimer = new IntervalTimer();

function gameOver(event) {
  io.emit('gameOver', event);
  intervalTimer.stopTimer();
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

module.exports = _io => {
  io = _io;
  io.on('connect', socket => {
    // alert board of new player
    const player = gameBoard.newPlayer();

    // if player is false, too many players connected
    if (!player) return;

    socket.on('ready', () => {
      console.log('player ready');
      player.ready = true;

      // check if both players are ready
      if (gameBoard.arePlayersReady()) {
        console.log('game starting');
        gameBoard.start();
        intervalTimer.startTimer();
      }
    });
    socket.on('restart', () => {
      intervalTimer.stopTimer();
      gameBoard.reset();
      gameBoard.start();
      intervalTimer.startTimer();
    });
    socket.on('turn', direction => {
      // tell player is turning only if game has started
      if (intervalTimer) player.turn(direction);
    });
    socket.on('disconnect', () => {
      player.disconnect();
      // tell frontend game stopped if running
      if (intervalTimer.timer) {
        intervalTimer.stopTimer();
        gameOver('playerDisconnect');
      }
    });
  });
};
