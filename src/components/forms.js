import React, { Component } from 'react';
import LoginForm from './auth/loginForm.js'
import CreateAccountForm from './auth/createAccountForm.js'
import './card.css';

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
    const unauthenticatedLogin = <button className='button switch'onClick={this.resetForm}> Switch to Create </button>
    const unauthenticatedCreate = <button className='button switch'onClick={this.resetForm}> Switch to Login </button>
    const authenticated = <div></div>
    const unauthenticatedSwitch = this.state.form == "create" ? unauthenticatedCreate : unauthenticatedLogin
    const bodyForms = this.props.authenticated ? authenticated : unauthenticated
    const switchButton = this.props.authenticated ? authenticated : unauthenticatedSwitch

    return (
      <div className="loginContainer">
      <h1 id="mainLogo">Wakaru</h1>
        { bodyForms }
        { switchButton }
      </div>
    )

  }
}

export default Forms;
