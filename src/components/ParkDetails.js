import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addParkToTrip } from '../actions/index'


class ParkDetails extends Component {

  handleButtonClick () {
    this.props.addParkToTrip({park: this.props.currentPark, trip: this.props.trip})
  }

  render() {
    if (!this.props.currentPark) {
      return <div></div>
    }

    return (
      <div className="ParkDetails fl w-two-thirds" >
        <h2 className="ParkDetailsText">{this.props.currentPark.name}</h2>
        <h2 className="ParkDetailsText">{this.props.currentPark.states}</h2>
        <h2 className="ParkDetailsText">{this.props.currentPark.description}</h2>
        <button onClick={this.handleButtonClick.bind(this)}>Add to Trip</button>
      </div>
    )
  }
}


//style={{backgroundImage: `url(${this.props.currentPark.image_url})`, backgroundSize: '100% 100%'}}

function mapStateToProps(state) {
  return {
    currentPark: state.currentPark,
    trip: state.trips
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addParkToTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetails)
