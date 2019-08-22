const opposites = {
  left: 'right',
  right: 'left',
  up: 'down',
  down: 'up',
};

const players = [];

const BOARD_ELEMENTS = {
  EMPTY: 0,
  PLAYER_1: 1,
  PLAYER_2: 2,
  TRAIL_1: 11,
  TRAIL_2: 22,
};

const BOARD_SIZE = 30;

const board = [];
for (let i = 0; i < BOARD_SIZE; i += 1) {
  board[i] = Array(BOARD_SIZE).fill(0);
}

class Player {
  constructor() {
    this.ready = false;
  }

  disconnect() {
    const index = players.indexOf(this);
    players.splice(index, 1);
  }

  // return true if no collision
  move() {
    const oldPosition = { ...this.position };
    this.directionBeforeMoving = this.currentDirection;

    switch (this.currentDirection) {
      case 'left':
        this.position.x -= 1;
        break;
      case 'right':
        this.position.x += 1;
        break;
      case 'up':
        this.position.y -= 1;
        break;
      case 'down':
        this.position.y += 1;
        break;
      default:
    }
    // check out of bounds
    if (this.position.x >= BOARD_SIZE || this.position.x < 0) return false;
    if (this.position.y >= BOARD_SIZE || this.position.y < 0) return false;

    // leave trail at old place
    {
      const { x, y } = oldPosition;
      board[y][x] = this.trail;
    }

    // update board with new head position
    {
      const { x, y } = this.position;

      // check collisions
      if (board[y][x] !== BOARD_ELEMENTS.EMPTY) return false;
      // update new head
      board[y][x] = this.type;
    }

    return true;
  }

  placePlayer(direction, position, type) {
    this.currentDirection = direction;
    this.directionBeforeMoving = direction;
    this.position = { ...position };
    this.type = type;
    this.trail = parseInt(`${type}${type}`, 10);

    const { x, y } = position;

    board[y][x] = type;
  }

  turn(direction) {
    if (direction !== opposites[this.directionBeforeMoving]) this.currentDirection = direction;
  }
}

const startingParams = [
  [
    'right',
    { x: Math.floor(BOARD_SIZE / 5), y: Math.floor(BOARD_SIZE / 2) },
    BOARD_ELEMENTS.PLAYER_1,
  ],
  [
    'left',
    { x: BOARD_SIZE - 1 - Math.floor(BOARD_SIZE / 5), y: Math.floor(BOARD_SIZE / 2) },
    BOARD_ELEMENTS.PLAYER_2,
  ],
];

module.exports = {
  reset: () => {
    for (let r = 0; r < BOARD_SIZE; r += 1) {
      for (let c = 0; c < BOARD_SIZE; c += 1) {
        board[r][c] = 0;
      }
    }
  },
  start: () => {
    players.forEach((player, i) => {
      player.placePlayer(...startingParams[i]);
    });
  },
  newPlayer: () => {
    const i = players.length;
    if (i >= 2) return false;
    players.push(new Player());

    return players[i];
  },
  movePlayers: () => {
    const collided = [];
    players.forEach((player, i) => {
      collided[i] = !player.move();
    });
    return collided;
  },
  arePlayersReady: () => {
    for (let i = 0; i < players.length; i += 1) {
      if (!players[i].ready) return false;
    }
    return true;
  },
  getBoard: () => board,
};
