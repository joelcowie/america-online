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
    var buttonStyle = {
      cursor: "pointer"
    }

    if (!this.props.currentPark) {
      return <div></div>
    }

    if (this.props.currentTrip.parks) {
      var parkIds = this.props.currentTrip.parks.map((park) => park.id)
    }

    if (!this.props.currentTrip.parks) {
      return (
        <div className="ParkDetails fl w-50" >
          <h2 className="ParkDetailsText">{this.props.currentPark.name}</h2>
          <h3 className="ParkDetailsText fl w-50">{this.props.currentPark.states}</h3>
          <img src={this.props.currentPark.image_url} />
          <h4 className="ParkDetailsText">{this.props.currentPark.description}</h4>

        </div>
      )
    } else if (parkIds.includes(this.props.currentPark.id)) {
      return (
        <div className="ParkDetails fl w-50" >
          <div className="fr pa2">
            <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black" style={buttonStyle} onClick={this.handleButtonClickRemove.bind(this)}>Remove from Trip</button>
          </div>
          <div>
            <h2 className="ParkDetailsText fl w-50">{this.props.currentPark.name}</h2>
            <h3 className="ParkDetailsText fl w-50">{this.props.currentPark.states}</h3>
          </div>
          <img src={this.props.currentPark.image_url} />
          <h4 className="ParkDetailsText">{this.props.currentPark.description}</h4>

        </div>
      )
    } else {
      return (
        <div className="ParkDetails fl w-50" >
          <div className="fr pa2">
            <button className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-near-black" style={buttonStyle} onClick={this.handleButtonClickAdd.bind(this)}>Add to Trip</button>
          </div>
          <div>
            <h2 className="ParkDetailsText fl w-50">{this.props.currentPark.name}</h2>
            <h3 className="ParkDetailsText fl w-50">{this.props.currentPark.states}</h3>
          </div>
          <img src={this.props.currentPark.image_url} />
          <h4 className="ParkDetailsText">{this.props.currentPark.description}</h4>
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
