import React, { Component } from 'react';
import BreakDownChart from './charts/breakDownChart.js'
import EmailInput from './emailInput.js'
import CategoryZeroWords from './homePage/categoryZeroWords.js'
import CategoryOneWords from './homePage/categoryOneWords.js'
import BubbleChart from './charts/bubbleChart.js'
import CategoryTwoWords from './homePage/categoryTwoWords.js'
import axios from 'axios'
import './card.css';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newEmail: false
    }

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
    const expandWithGraph = "this would be the new graph"
    const expandPage = this.state.newEmail == false ? null : expandWithGraph
    return(
      <div className="container">
        <div className="divider">
          <BreakDownChart/>
          <EmailInput onClick={this.getEmailCategory}/>
        </div>
        <div className="divider">
          { expandPage }
          <BubbleChart/>
          // <CategoryZeroWords/>
          // <CategoryOneWords/>
          // <CategoryTwoWords/>
        </div>
      </div>
    )
  }
}

export default HomePage;
