import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addParkToTrip, addParkToCurrentTrip } from '../actions/index'


class ParkDetails extends Component {

  handleButtonClick () {
    this.props.addParkToTrip({park: this.props.currentPark, trip: this.props.currentTrip})
    this.props.addParkToCurrentTrip(this.props.currentPark)
  }

  render() {
    if (!this.props.currentPark) {
      return <div></div>
    }


  if (this.props.currentTrip) {
    return (
      <div className="ParkDetails fl w-two-thirds" >
        <h2 className="ParkDetailsText">{this.props.currentPark.name}</h2>
        <h2 className="ParkDetailsText">{this.props.currentPark.states}</h2>
        <h2 className="ParkDetailsText">{this.props.currentPark.description}</h2>
        <button onClick={this.handleButtonClick.bind(this)}>Add to Trip</button>
      </div>
    )
    } else {
      return (
        <div className="ParkDetails fl w-two-thirds" >
          <h2 className="ParkDetailsText">{this.props.currentPark.name}</h2>
          <h2 className="ParkDetailsText">{this.props.currentPark.states}</h2>
          <h2 className="ParkDetailsText">{this.props.currentPark.description}</h2>
        </div>
      )
    }

  }
}


//style={{backgroundImage: `url(${this.props.currentPark.image_url})`, backgroundSize: '100% 100%'}}

function mapStateToProps(state) {
  return {
    currentPark: state.currentPark,
    currentTrip: state.currentTrip
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addParkToTrip, addParkToCurrentTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetails)
