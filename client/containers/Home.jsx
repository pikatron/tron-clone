import React, { Component } from 'react';
import io from 'socket.io-client';

import LogoutButton from '../components/LogoutButton';

import Board from './Board';
import ReadyButton from '../components/ReadyButton';

const socket = io();

const readyPlayer = () => {
  socket.emit('ready');
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
    };

    socket.on('updateBoard', matrix => {
      console.log(matrix);
      this.setState({ board: matrix });
    });
    // emit socket events like
    // socket.emit('turn')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Board board={this.state.board} />
        <ReadyButton readyPlayer={readyPlayer} />
        <LogoutButton />
      </div>
    );
  }
}

export default Home;
