import React, { Component } from 'react';
import BreakDownChart from './charts/breakDownChart.js'
import EmailInput from './emailInput.js'
import axios from 'axios'
import './card.css';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.getEmailCategory = this.getEmailCategory.bind(this)
  }

  getEmailCategory (email, fixture, category) {
    debugger
    axios.post('http://localhost:3000/api/v1/category', {
      params: {
      question: "",
      response: email,
      domain: fixture
    }
    }).then((response) => {
      localStorage.setItem("token", response.data["token"])
      this.props.auth()
    })
    .catch((error) => {
      alert("Invalid login credentials")
    })
  }

  render() {
    return(
      <div className="divider">
        <BreakDownChart/>
        <EmailInput onClick={this.getEmailCategory}/>
      </div>
    )
  }
}

export default HomePage;
