import React, { Component } from 'react';
import ReactBubbleChart from 'react-bubble-chart';
import './style.css'

class BubbleChart extends Component {
    constructor(props) {
      super(props)
      this.state = {}

    }

    render () {
      const data = [{
        _id: "1",
        value: 2,
        displayText: "someting",
        colorValue: 234,
        selected: false
      }]
      return(
        <div className="bubbleChart">
          <ReactBubbleChart
            className="my-cool-chart"
            data={data}
            selectedColor="#737373"
            selectedTextColor="#d9d9d9"
            fixedDomain={{min: -1, max: 1}}
            legendSpacing={0}
            tooltip={true}/>
        </div>
      )
    }
}

export default BubbleChart;
