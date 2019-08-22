import React, { useState, useEffect } from 'react';
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

function Home() {
  const [board, setBoard] = useState(Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0)));

  useEffect(() => {
    // componentDidMount
    socket.on('updateBoard', setBoard);
    document.addEventListener('keydown', handleKeyPress);

    // componentWillUnmount
    return () => {
      socket.off('updateBoard', setBoard);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Board board={board} />
      <ReadyButton readyPlayer={readyPlayer} />
      <LogoutButton />
    </div>
  );
}

export default Home;
