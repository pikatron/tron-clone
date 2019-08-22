import React, { Component } from 'react';
import io from 'socket.io-client';

import LogoutButton from '../components/LogoutButton';

import Board from '../containers/Board';
import ReadyButton from '../components/ReadyButton';
const socket = io()

socket.on('updateBoard', (matrix)=>{
  this.setState({board: matrix})
});
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: []
    }
    // emit socket events like
    // socket.emit('turn')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Board board={this.state.board} />
        <ReadyButton />
        <LogoutButton />
      </div>
    );
  }
}

export default Home;
