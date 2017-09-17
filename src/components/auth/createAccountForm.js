import React, { Component } from 'react';
import axios from 'axios'
import '../card.css';


class CreateAccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
      this.handleChangeUsername = this.handleChangeUsername.bind(this)
      this.handleChangePassword = this.handleChangePassword.bind(this)
      this.postAccount = this.postAccount.bind(this)
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value})
  }
  handleChangePassword(event) {
    this.setState({password: event.target.value})
  }

  postAccount(event) {
    event.preventDefault()
    axios.post('https://wakaru-backend.herokuapp.com/api/v1/session', { username: this.state.username, password: this.state.password}
  ).then((response) => {
    localStorage.setItem("token", response.data["token"])
    this.props.auth()
    })
    .catch((error) => {
      alert("Invalid account credentials. Could not create profile.")
    })
  }

  render() {
    return (
      <form onSubmit={this.postAccount}>
        <label>
          <input type="text" placeholder="Choose Username" value={this.state.username} onChange={this.handleChangeUsername} />
          <input type="text" placeholder="Create Password" value={this.state.password} onChange={this.handleChangePassword} />
        </label>
        <input id="createAccount" type="submit" value="Create Account" />
      </form>
    )
  }
}

export default CreateAccountForm;
