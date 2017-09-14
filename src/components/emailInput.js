import React, { Component } from 'react';
import autosize from 'autosize';
import './card.css';

class EmailInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      fixture: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.textarea.focus();
    autosize(this.textarea);
  }

  handleChange(event) {
    this.setState({email: event.target.value})
  }

  handleSubmit() {
    this.props.onClick(this.state.email, this.state.fixture)
  }

  render() {
    const style = {
                maxHeight:'250px',
                minHeight:'170px',
                minWidth:'400px',
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
        <button className='submit-button'
          onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

export default EmailInput
