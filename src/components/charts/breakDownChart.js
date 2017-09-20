import React, { Component } from 'react';
import { VictoryPie } from 'victory';
import axios from 'axios'
import '../card.css';


class BreakDownChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }


  render() {
    return(
      <div className="category">
        <h1 id="breakdownTitle">Wakaru</h1>
        <svg width={400} height={400} className="svg">
          <circle cx={150} cy={150} r={50} fill="#1276a8"/>
          <VictoryPie standalone={false}
                      cornerRadius={25}
                      padAngle={3}
                      width={300}
                      height={300}
                      innerRadius={75}
                      title={"history breakdown of documented emails"}
                      data={this.props.categoryData}/>
        </svg>
      </div>
    )
  }
}

export default BreakDownChart;
