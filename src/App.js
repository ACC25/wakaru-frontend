import React, { Component } from 'react';
import './App.css';
import Forms from './components/forms.js'
import HomePage from './components/homePage.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false
    }
    this.checkAuth = this.checkAuth.bind(this)
  }
  checkAuth() {
    localStorage.getItem("token") ? this.setState({authenticated: true}) : null
  }
  render() {
    const authenticated = this.state.authenticated === true ? <HomePage/> : <Forms authenticated={this.state.authenticated} auth={this.checkAuth} />
    return (
      <div>
        {authenticated}
      </div>
    )
  }
}

export default App;
