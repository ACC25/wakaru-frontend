import React, { Component } from 'react';

class CreateAccountForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
  }

  render() {
    return (
      <form onSubmit={this.getToken}>
        <label>
          <input type="text" placeholder="Choose Username" value={this.state.username} onChange={this.handleChange} />
          <input type="text" placeholder="Create Password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Create Account" />
      </form>
    )
  }
}

export default CreateAccountForm;
