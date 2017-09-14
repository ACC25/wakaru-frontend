import React, { Component } from 'react';
import LoginForm from './auth/loginForm.js'
import CreateAccountForm from './auth/createAccountForm.js'

class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: "login",
      authenticated: this.props.authenticated
    }
    this.resetForm = this.resetForm.bind(this)
  }

  resetForm(event) {
    const switcher = {
      login: "create",
      create: "login"
    }
    this.setState({
      form: switcher[this.state.form]
    })
  }

  render() {
    const forms = {
      login: <LoginForm auth={this.props.auth}/>,
      create: <CreateAccountForm auth={this.props.auth}/>
    }
    const unauthenticated = forms[this.state.form]
    const unauthenticatedButton = <button className='button'onClick={this.resetForm}> Switch Forms </button>
    const authenticated = <div></div>
    const bodyForms = this.props.authenticated ? authenticated : unauthenticated
    const switchButton = this.props.authenticated ? authenticated : unauthenticatedButton

    return (
      <div>
        { bodyForms }
        { switchButton }
      </div>
    )

  }
}

export default Forms;
