import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import LogoutButton from '../components/LogoutButton';

import Board from './Board';
import ReadyButton from '../components/ReadyButton';
import RestartButton from '../components/RestartButton';

const BOARD_SIZE = 30;

const socket = io();

function Home() {
  const [board, setBoard] = useState(Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0)));
  const [running, setRunning] = useState(true);

  function update(newBoard) {
    setBoard(newBoard);
    setRunning(true);
  }
  function stop() {
    setRunning(false);
  }
  function restart() {
    setRunning(true);
    socket.emit('restart');
  }
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

  useEffect(() => {
    // componentDidMount
    socket.on('updateBoard', update);
    socket.on('gameOver', stop);
    document.addEventListener('keydown', handleKeyPress);

    // componentWillUnmount
    return () => {
      socket.off('updateBoard');
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <Board board={board} />
      <ReadyButton readyPlayer={() => socket.emit('ready')} />
      <RestartButton running={running} restart={restart} />
      <LogoutButton />
    </div>
  );
}

export default Home;
