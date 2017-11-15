import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name
    const temp = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp * 9/5 - 459.67)
    const pressure = _.map(cityData.list.map(weather => weather.main.pressure), (press) => press * 0.02952998751)    
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temp} color="orange" units="℉" /></td>
        <td><Chart data={pressure} color="green" units="inHg" /></td>
        <td><Chart data={humidity} color="blue" units="%" /></td>
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
