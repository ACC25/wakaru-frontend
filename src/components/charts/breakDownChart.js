import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import axios from 'axios'
import '../card.css';


class BreakDownChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      categoryData: []
    }
    this.getBreakDown = this.getBreakDown.bind(this)
  }

  getBreakDown(event) {
    axios.get('http://localhost:3000/api/v1/category', {
      params: { "token": localStorage.getItem("token")}
    }).then((response) => {
      this.setState({categoryData: response.data})
      this.setState({loaded: true})
    })
  }

  render() {
    const loadGraph = <VictoryPie data={this.state.categoryData}/>
    const data = this.state.loaded == false ? this.getBreakDown() : loadGraph
    return(
      <div className="category">
        <h1>Email Breakdown</h1>
        <svg width={300} height={300}>
          <circle cx={150} cy={150} r={50} fill="#1276a8"/>
          <VictoryPie standalone={false}
                      cornerRadius={25}
                      padAngle={3}
                      width={300}
                      height={300}
                      innerRadius={75}
                      data={this.state.categoryData}/>
        </svg>
      </div>
    )
  }
}

export default BreakDownChart;
