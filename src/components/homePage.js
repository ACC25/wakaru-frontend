import React, { Component } from 'react';
import BreakDownChart from './charts/breakDownChart.js'
import EmailBreakDownChart from './charts/emailBreakDownChart.js'
import Classification from './homePage/classification.js'
import EmailInput from './emailInput.js'
import axios from 'axios'
import './card.css';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newEmail: false,
      emailData: ""
    }

    this.getEmailCategory = this.getEmailCategory.bind(this)
  }

  getEmailCategory (email, fixture, category) {
    axios.post('http://localhost:3000/api/v1/category', {
      token: localStorage.getItem("token"),
      question: "",
      response: email,
      domain: fixture,
      category: category
    }).then((response) => {
      this.setState({newEmail: true})
      this.setState({emailData: response.data})
    })
    .catch((error) => {
      alert("Invalid login credentials")
    })
  }

  render() {
    const expandWithGraph = <EmailBreakDownChart data={this.state.emailData}/>
    const expandCategory = <Classification data={this.state.emailData}/>
    const expandPage = this.state.newEmail == false ? null : expandWithGraph
    const expandClassification = this.state.newEmail == false ? null : expandCategory
    return(
      <div className="container">
        <div className="divider">
          <BreakDownChart/>
          <EmailInput onClick={this.getEmailCategory}/>
        </div>
        <div className="divider">
          { expandPage }
        </div>
        <div className="divider">
          { expandClassification }
        </div>
      </div>
    )
  }
}

export default HomePage;
