import React, { Component } from 'react'
import { connect } from 'react-redux'


class ParkDetails extends Component {

  render() {
    if (!this.props.currentPark) {
      return <div>Welcome to the RoadTripper!</div>
    }

    return (
      <div className="ParkDetails fl w-two-thirds" style={{backgroundImage: `url(${this.props.currentPark.image_url})`}}>
        <h2>{this.props.currentPark.name}</h2>
        <h2>{this.props.currentPark.states}</h2>
        <h2>{this.props.currentPark.description}</h2>
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
