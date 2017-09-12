import React, { Component } from 'react';

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
      React.createElement('form', {className: 'ContactForm'},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name (required)',
          value: this.props.value,
        }),
        React.createElement('input', {
          type: 'text',
          placeholder: 'Password (required)',
          value: this.props.value,
        }),
        React.createElement('button', {type: 'submit'}, "Login")
      )

    )
  }
}

export default LoginForm;
