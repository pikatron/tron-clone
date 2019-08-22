import React, { Component } from 'react';
import io from 'socket.io-client';

import LogoutButton from '../components/LogoutButton';

import Board from './Board';
import ReadyButton from '../components/ReadyButton';

const BOARD_SIZE = 30;

const socket = io();

const readyPlayer = () => {
  socket.emit('ready');
};

function handleKeyPress(e) {
  const key = {
    ArrowLeft: 'left',
    a: 'left',

    ArrowRight: 'right',
    d: 'right',

    ArrowUp: 'up',
    w: 'up',

    ArrowDown: 'down',
    s: 'down',
  };

  if (key[e.key]) {
    socket.emit('turn', key[e.key]);
  }
}

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0)),
    };

    socket.on('updateBoard', matrix => {
      this.setState({ board: matrix });
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', handleKeyPress);
  }

  render() {
    const { board } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <Board board={board} />
        <ReadyButton readyPlayer={readyPlayer} />
        <LogoutButton />
      </div>
    );
  }
}

export default Home;
