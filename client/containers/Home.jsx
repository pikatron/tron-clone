import React, { Component } from 'react';

import Board from '../containers/Board';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <Board />
      </div>
    );
  }
}

export default Home;
