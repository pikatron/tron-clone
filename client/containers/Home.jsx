import React, { Component } from 'react';
import io from 'socket.io-client';

import LogoutButton from '../components/LogoutButton';

import Board from '../containers/Board';
import ReadyPlayer from '../components/OptionsButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io(),
    };

    // emit socket events like
    // socket.emit('turn')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Board socket={this.state.socket} />
        <ReadyPlayer team='Red' />
        <ReadyPlayer team='Blue' />
        <LogoutButton />
      </div>
    );
  }
}

export default Home;
