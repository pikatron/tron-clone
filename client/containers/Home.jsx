import React, { Component } from 'react';

import LogoutButton from '../components/LogoutButton';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
