import React, { Component } from 'react';

class CreateAccountForm extends Component {
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
        React.createElement('button', {type: 'submit'}, "Create Account")
      )
    )
  }
}

export default CreateAccountForm;
