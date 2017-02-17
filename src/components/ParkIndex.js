import React, { Component } from 'react'
import MapImage from './MapImage'
import ParkDetails from './ParkDetails'
import ParkList from './ParkList'
import ParkThumbnail from './ParkThumbnail'

export default class ParkIndex extends Component {

  render() {
    return (
      <div className="ParkIndex">
        <ParkList/>
        <MapImage/>
        {this.props.children}
      </div>
    )
  }
}
