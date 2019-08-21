import React, { Component } from 'react';
import io from 'socket.io-client';

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
      </div>
    );
  }
}

export default Home;
