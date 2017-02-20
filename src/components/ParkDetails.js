import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addParkToTrip, removeParkFromTrip } from '../actions/index'


class ParkDetails extends Component {

  handleButtonClickAdd() {
    this.props.addParkToTrip({park: this.props.currentPark, trip: this.props.currentTrip})
  }

  handleButtonClickRemove() {
    this.props.removeParkFromTrip({park: this.props.currentPark, trip: this.props.currentTrip})
  }

  render() {

    if (!this.props.currentPark) {
      return <div></div>
    }
    // let parkIds;

    // if (this.props.currentTrip.parks) {
      const parkIds = this.props.currentTrip.parks.map((park) => park.id)
    // }

    if (parkIds.includes(this.props.currentPark.id)) {
      return (
        <div className="ParkDetails fl w-two-thirds" >
          <h2 className="ParkDetailsText">{this.props.currentPark.name}</h2>
          <h2 className="ParkDetailsText">{this.props.currentPark.states}</h2>
          <h2 className="ParkDetailsText">{this.props.currentPark.description}</h2>
          <div className="">
            <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black" onClick={this.handleButtonClickRemove.bind(this)}>Remove from Trip</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className="ParkDetails fl w-two-thirds" >
          <h2 className="ParkDetailsText">{this.props.currentPark.name}</h2>
          <h2 className="ParkDetailsText">{this.props.currentPark.states}</h2>
          <h2 className="ParkDetailsText">{this.props.currentPark.description}</h2>
          <div className="">
            <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black" onClick={this.handleButtonClickAdd.bind(this)}>Add to Trip</button>
          </div>
        </div>
      )
    }
  }
}

// style={{backgroundImage: `url(${this.props.currentPark.image_url})`, backgroundSize: '100% 100%'}}

function mapStateToProps(state) {
  return {
    currentPark: state.currentPark,
    currentTrip: state.currentTrip
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({addParkToTrip, removeParkFromTrip}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkDetails)
