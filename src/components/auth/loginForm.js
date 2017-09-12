import React, { Component } from 'react';
import axios from 'axios'

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      username: "",
      password: ""
    }
    this.handleChangeUsername = this.handleChangeUsername.bind(this)
    this.handleChangePassword = this.handleChangePassword.bind(this)
    this.getToken = this.getToken.bind(this)
  }
  handleChangeUsername(event) {
    this.setState({username: event.target.value})
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value})
  }
  getToken() {
    console.log(this.state.username)
    axios.get('http://localhost:3000/api/v1/sessions', {
      params: {
      username: this.state.username,
      password: this.state.password
    }
    }).then((foods) => {
      console.log(foods)
    }).catch((error) => {
      console.error(error)
    })
  }

  render() {
    return (
      <form onSubmit={this.getToken}>
        <label>
          <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleChangeUsername} />
          <input type="text" placeholder="Enter Password" value={this.state.password} onChange={this.handleChangePassword} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default LoginForm;
