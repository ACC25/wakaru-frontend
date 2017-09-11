import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ActionButton extends Component {
  render() {
    return (
      <button className="action-button" onClick={this.props.onClick}>
        {this.props.text}
      </button>
    )
  }
}

class App extends Component {
  handleClick() {
    alert('Hello!')
  }
  render() {
    return (
      <div className="App">
        <ActionButton text="Hello" onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;
