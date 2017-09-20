import React, { Component } from 'react';
import { VictoryGroup } from 'victory';
import { VictoryBar } from 'victory';
import { VictoryLabel } from 'victory';

class EmailBreakDownChart extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className="emailBreakDownChart">
        <VictoryGroup
          height={800}
          width={800}
          animate={{duration: 2000,onLoad: { duration: 1000 }}}
          offset={30}
          colorScale={["green", "orange", "red"]}
          >
          <VictoryBar
            data={this.props.data[0]}
            labels={(d) => d.y}
            style={{ labels: { fill: "white" } }}
            labelComponent={<VictoryLabel dy={50}/>}/>
          <VictoryBar
            data={this.props.data[1]}
            labels={(d) => d.y}
            style={{ labels: { fill: "white" } }}
            labelComponent={<VictoryLabel dy={50}/>}/>
          <VictoryBar
            data={this.props.data[2]}
            labels={(d) => d.y}
            style={{ labels: { fill: "white" } }}
            labelComponent={<VictoryLabel dy={50}/>}/>
        </VictoryGroup>
      </div>
    )
  }
}

export default EmailBreakDownChart
