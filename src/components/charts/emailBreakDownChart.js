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
          domainPadding={40}
          animate={{duration: 2000,onLoad: { duration: 1000 }}}
          labels={(d) => d.y}
          labels={["Enjoyment", "Big 5", "Dissatisfaction"]}
          offset={50}
          colorScale={["green", "orange", "red"]}
          labelComponent={<VictoryLabel dy={30}/>}>
          <VictoryBar
            data={this.props.data[0]}/>
          <VictoryBar
            data={this.props.data[1]}/>
          <VictoryBar
            data={this.props.data[2]}/>
        </VictoryGroup>
      </div>
    )
  }
}

export default EmailBreakDownChart
