import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import axios from 'axios'


class BreakDownChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      data: []
    }
    this.getBreakDown = this.getBreakDown.bind(this)
  }

  getBreakDown(event) {
    axios.get('http://localhost:3000/api/v1/category', {
      params: { "token": localStorage.getItem("token")}
    }).then((response) => {
      this.setState({data: response.data})
      this.setState({loaded: true})
    })
  }

  render() {
    const loadGraph = <VictoryPie data={this.state.data}/>
    const data = this.state.loaded == false ? this.getBreakDown() : loadGraph
    return(
      <div>
      <h1>This is the breakdown page</h1>
        <VictoryPie data={this.state.data}/>
      </div>
    )
  }
}

export default BreakDownChart;
