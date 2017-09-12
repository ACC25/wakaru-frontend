import React, { Component } from 'react';
import GetToken from '../api/getToken.js'

class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="Enter Username" value={this.state.username} onChange={this.handleChange} />
          <input type="text" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default LoginForm;

// React.createElement('form', {className: 'ContactForm'},
//   React.createElement('input', {
//     type: 'text',
//     placeholder: 'Name (required)',
//     value: this.props.value,
//   }),
//   React.createElement('input', {
//     type: 'text',
//     placeholder: 'Password (required)',
//     value: this.props.value,
//   }),
//   React.createElement('button', {type: 'submit'}, "Login")
// )
