import React, { Component } from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import autosize from 'autosize';
import './card.css';

class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      fixture: 0,
      category: null,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.radioChange = this.radioChange.bind(this)
  }

  componentDidMount(){
    this.textarea.focus();
    autosize(this.textarea);
  }

  handleReset() {
    this.setState({email: ""})
    this.setState({fixture: 0})
    this.setState({category: null})
    this.props.resetPage()
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit() {
    this.props.onClick(this.state.email, this.state.fixture, this.state.category)
  }

  radioChange(event) {
    this.setState({category: event})
    this.setState({fixture: 1})
  }

  render() {
    const style = {
                maxHeight:'250px',
                minHeight:'170px',
                minWidth:'800px',
                  resize:'none',
                  padding:'9px',
                  boxSizing:'border-box',
                  fontSize:'15px'}
    return (
      <div className="email">
        <textarea
            style={style}
            ref={c=>this.textarea=c}
            placeholder="Copy an email into this field for categorization."
            rows={1}
            defaultValue={this.state.email}
            onChange={this.handleChange}/>
        <RadioGroup onChange={ this.radioChange }>
          <RadioButton value="0">
            Good
          </RadioButton>
          <RadioButton value="1">
            Medium
          </RadioButton>
          <RadioButton value="2">
            Bad
          </RadioButton>
        </RadioGroup>
      <button id='submitButton'
        onClick={this.handleSubmit}>
        Submit
      </button>
      <button id='resetButton'
        onClick={this.handleReset}>
        Reset
      </button>
      </div>
    )
  }
}

export default EmailInput
