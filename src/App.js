import React, { Component } from 'react'
import SearchBar from './containers/search_bar'

class App extends Component {
  render() {
    return (
      <div className="main">
        <h1>React-Redux Weather Forecast</h1>
        <SearchBar />
      </div>
    )
  }
}

export default App