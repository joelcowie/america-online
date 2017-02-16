import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/index.css'

import MapImage from './MapImage'
import ParkDetails from './ParkDetails'
import ParkList from './ParkList'
import ParkThumbnail from './ParkThumbnail'
import UserSignUp from './UserSignUp'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='AppTitle'>National Parks</h1>
        <MapImage/>
        <ParkDetails/>
        <ParkList>
          <ParkThumbnail/>
        </ParkList>
        <UserSignUp/>
      </div>
    )
  }
}

export default App
