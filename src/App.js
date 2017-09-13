import React, { Component } from 'react';
import './App.css';
import HomePage from './components/homePage.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      authenticated: false
    }
  }
  
  render() {
    return (
      <HomePage authenticated={this.state.authenticated}/>
    )
  }
}

export default App;
