import React, { Component } from 'react'

export default class SearchBar extends Component {
  //initialize state with this.state.term for empty search term
  constructor(props) {
    super(props)

    this.state = { term: '' }

    //binds onInputChange 'this' to component 'this'
    this.onInputChange = this.onInputChange.bind(this)
  }

  //function to change input field state | event object as first argument
  onInputChange(e) {
    console.log(e.target.value)
    this.setState({ term: e.target.value })
  }

  render() {
    return (
      <form className="input-group">
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