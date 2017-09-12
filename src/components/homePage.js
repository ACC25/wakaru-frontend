import React, { Component } from 'react';
import LoginForm from './auth/loginForm.js'
import CreateAccountForm from './auth/createAccountForm.js'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: "login"
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
      login: <LoginForm/>,
      create: <CreateAccountForm/>
    }
    const unauthenticated = forms[this.state.form]
    const authenticated = <div></div>
    const bodyForms = this.props.authenticated
      ? authenticated
      : unauthenticated
    return (
      <div>
        { bodyForms }

        <button className='button'
          onClick={this.resetForm}>
          Switch Forms
        </button>
      </div>
    )

  }
}

export default HomePage;
