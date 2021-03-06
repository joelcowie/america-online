import React, { Component } from 'react'
import { connect } from 'react-redux'
import TripThumbnail from './TripThumbnail'



class TripList extends Component {
  render() {

    if (!this.props.currentTrip.parks) {
      return (
        <div className="TripList fl w-20">
          <h1 className="TripListName tc">Login to make a &uarr; trip! </h1>
        </div>
      )
    }

    if (this.props.currentTrip.parks) {
      var list = this.props.currentTrip.parks.map(park => <div><TripThumbnail park = {park}/></div>)
    }

    if (this.props.currentTrip.parks) {
      return (
        <div className="TripList fl w-20">
          <h2 className="TripListName">{this.props.currentTrip.trip.name}</h2>
          <ul>{list}</ul>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({}, dispatch)
// }

function mapStateToProps(state) {
  return {
    currentTrip: state.currentTrip
  }
}

export default connect(mapStateToProps)(TripList)
