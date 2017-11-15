import React, { Component } from 'react'
import { connect } from 'react-redux'


class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    // const temps = cityData.list.map(weather => weather.main.temp)
    // const humidity = cityData.list.map(weather => weather.main.humidity)
    // const pressure = cityData.list.map(weather => weather.main.pressure)
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{temps}</td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

//ES6 syntax to shorten function mapStateToProps(state){return weather = state.weather}
function mapStateToProps({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
