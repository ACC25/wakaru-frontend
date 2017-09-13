import React, { Component } from 'react';
import BreakDownChart from './charts/breakDownChart.js'

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return(
      <div>
      <h1>This is the homepage </h1>
      <BreakDownChart />
      </div>
    )
  }
}

export default HomePage;
