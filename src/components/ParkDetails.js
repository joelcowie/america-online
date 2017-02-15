import React, { Component } from 'react'
import { connect } from 'react-redux'


class ParkDetails extends Component {

  render() {
    if (!this.props.currentPark) {
      return <div>Welcome to the RoadTripper!</div>
    }

    return (
      <div className="ParkDetails">
        <h3>{this.props.currentPark.name}</h3>
        <h4>{this.props.currentPark.states}</h4>
        <h4>{this.props.currentPark.description}</h4>
        <h4>{this.props.currentPark.weatherInfo}</h4>
        <h4>{this.props.currentPark.latLong}</h4>
        <h4>{this.props.currentPark.url}</h4>

      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentPark: state.currentPark
  }
}
export default connect(mapStateToProps)(ParkDetails)
