import React, { Component } from 'react';

class Classification extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div className="overallBreakDown">
      <h1>Enjoyment</h1>
        {this.props.data[3]}
      <h1>Brand</h1>
        {this.props.data[4]}
      <h1>Category</h1>
        {this.props.data[5]}
      </div>
    )
  }
}

export default Classification
