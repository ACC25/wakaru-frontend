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
    // this.state.loading = true
    // this.setState({authenticated: true}, this.setState({loading: false})) : null
    // const loading = this.state.loading === true ? <h1>LOADING</h1> : null
    // {loading}
    localStorage.getItem("token") ? this.setState({authenticated: true}) : null
  }
  render() {
    // const homePage = <HomePage authenticated={this.state.authenticated} auth={this.checkAuth} />
    const authenticated = this.state.authenticated === true ? <HomePage/> : <Forms authenticated={this.state.authenticated} auth={this.checkAuth} />
    return (
      <div>
        {authenticated}
      </div>
    )
  }
}

export default App;
