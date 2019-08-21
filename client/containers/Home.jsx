import React, { Component } from 'react';
import io from 'socket.io-client';

import LogoutButton from '../components/LogoutButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: io(),
    };

    const { socket } = this.state;

    socket.on('updateBoard', console.log);
    socket.emit('ready');
    // emit socket events like
    // socket.emit('turn')
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <LogoutButton />
      </div>
    );
  }
}

export default Home;
