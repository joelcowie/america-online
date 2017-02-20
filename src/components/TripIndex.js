import React, { Component } from 'react'
import MapImage from './MapImage'
import ParkDetails from './ParkDetails'
import TripList from './TripList'
import TripThumbnail from './TripThumbnail'

export default class ParkIndex extends Component {

  render() {
    return (
      <div className="TripIndex">
        <TripList/>
        {this.props.children}
      </div>
    )
  }
}
