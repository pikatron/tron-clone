import React, { Component } from 'react';

import GoogleSignInButton from '../components/GoogleSignInButton';
import DefaultSignIn from '../components/DefaultSignIn';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        user: 'admin',
        pass: 'admin'
      },
      buttonClicked: '',

    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.buttonClicked = this.buttonClicked.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();

    const userBool = e.target.username.value === this.state.default.user;
    const passBool = e.target.password.value === this.state.default.pass;

    if( userBool && passBool){
        console.log('ur in')
        window.location.href = './Home'
    } else {
        console.log('ur out')
    }

  }

  buttonClicked(e) {
    this.setState({ buttonClicked: e.target.name }, () => console.log(this.state.buttonClicked) )
  }

  render() {
    return (
      <div>
        <GoogleSignInButton />
        <br />
        <DefaultSignIn handleSubmit={this.handleSubmit} buttonClicked={this.buttonClicked} />
      </div>
    )
  }
}

export default LogIn;