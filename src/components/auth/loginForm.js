import React, { Component } from 'react';
import axios from 'axios'
import '../card.css';



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

  getToken(event) {
    event.preventDefault()
    axios.get('http://localhost:3000/api/v1/session', {
      params: {
      username: this.state.username,
      password: this.state.password
    }
    }).then((response) => {
      localStorage.setItem("token", response.data["token"])
      this.props.auth()
    })
    .catch((error) => {
      alert("Invalid login credentials")
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
