import React, { Component } from 'react'
import MapImage from './MapImage'
import ParkDetails from './ParkDetails'
import ParkList from './ParkList'
import ParkThumbnail from './ParkThumbnail'
import TripList from './TripList'

export default class ParkIndex extends Component {

  render() {
    return (
      <div className="ParkIndex">
        <ParkList/>
        <TripList/>
        <ParkDetails/>
        {this.props.children}
      </div>
    )
  }
}
