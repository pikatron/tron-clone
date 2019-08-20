import React from "react";
import createUser  from "../redux/actions/registrationAction";
import { connect } from "react-redux";
import {store} from '../redux/store'

class Signup extends React.Component {

  state = {
    username: "",
    password: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createUser(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name='username'
          placeholder='Username'
          value = {this.state.value}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
        />
        <input
          name="password"
          placeholder="Password"
          type = 'password'
          value={this.state.value}
          onChange={event =>
            this.setState({ [event.target.name]: event.target.value })
          }
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

const mapDispatchToProps = () => ({
  createUser: (userInfo) => createUser(userInfo)
})

export default connect(null, mapDispatchToProps)(Signup);