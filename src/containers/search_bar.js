import React, { Component } from 'react'

export default class SearchBar extends Component {
  //initialize state with this.state.term for empty search term
  constructor(props) {
    super(props)

    this.state = { term: '' }

    //binds onInputChange 'this' to component 'this'
    //can also use fat arrow in input and remove bind(): `onChange={(e) => this.onInputChange(e)}`
    this.onInputChange = this.onInputChange.bind(this)
  }

  //function to change input field state | event object as first argument
  onInputChange(e) {
    console.log(e.target.value)
    this.setState({ term: e.target.value })
  }

  //function that prevents default form submit and fetches weather API data
  onFormSubmit(e) {
    //stops browser from submitting the form
    e.preventDefault()

    //we need to go and fetch weather data
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="form input-group">
        <input 
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}