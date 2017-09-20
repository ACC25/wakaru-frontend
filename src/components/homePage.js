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
      newCategoryData: "",
      emailData: "",
      categoryData: []
    }

    this.getEmailCategory = this.getEmailCategory.bind(this)
    this.resetHomePage = this.resetHomePage.bind(this)
    this.getBreakdown = this.getBreakdown.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  componentDidMount() {
    this.getBreakdown()
  }

  refresh() {
    if (this.state.newCategoryData == true) {
      this.getBreakdown()
    }
  }

  getBreakdown() {
    axios.get('http://localhost:3000/api/v1/category', {
      params: { "token": localStorage.getItem("token")}
    }).then((response) => {
      this.setState({categoryData: response.data})
      this.setState({newCategoryData: false})
    })
  }

  resetHomePage() {
    this.setState({newEmail: false})
    this.setState({newData: ""})
  }

  getEmailCategory (email, fixture, category) {
    axios.post('https://wakaru-backend.herokuapp.com/api/v1/category', {
      token: localStorage.getItem("token"),
      question: "",
      response: email,
      domain: fixture.toString(),
      category: category
    }).then((response) => {
      this.setState({newEmail: true})
      this.setState({emailData: response.data})
      this.setState({newCategoryData: true})
    })
    .catch((error) => {
      alert("Email could not be categorized.")
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
          { this.refresh() }
          <BreakDownChart categoryData={this.state.categoryData}/>
          <EmailInput onClick={this.getEmailCategory} resetPage={this.resetHomePage}/>
        </div>
        <div className="dividerGraph">
          { expandPage }
          </div>
          <div className="dividerGraph">
          { expandClassification }
        </div>
        <div className="dividerPrediction">
        </div>
      </div>
    )
  }
}

export default HomePage;
