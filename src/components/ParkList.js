import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParkThumbnail from './ParkThumbnail'

const parks = ['park1', 'park2', 'park3']


class ParkList extends Component {


  render() {
    var list = parks.map(park => <li><ParkThumbnail/></li>)
    return (
      <div className="ParkList">
        <ul>
          {list}
        </ul>
      </div>
    )
  }
}

export default ParkList
