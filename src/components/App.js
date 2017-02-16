import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../style/index.css'

import MapImage from './MapImage'
import ParkDetails from './ParkDetails'
import ParkList from './ParkList'
import ParkThumbnail from './ParkThumbnail'
import UserSignUp from './UserSignUp'
import Nav from './Nav'
import TripForm from './TripForm'
import UserLogIn from './UserLogIn'
import {fetchUser} from '../actions/index.js'
import {bindActionCreators} from 'redux'

class App extends Component {

  componentDidMount() {
    if (sessionStorage.length !== 0) {
      this.props.fetchUser()
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="dt w-100 border-box pa3 ph5-ns">
          <h3 className="dtc v-mid mid-gray link w-25">Roadtripper</h3>
          <Nav/>
          </nav>
        <MapImage/>
        <TripForm/>
        <ParkDetails/>
        <UserSignUp/>
        <ParkList>
          <ParkThumbnail/>
        </ParkList>
        <UserLogIn/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}



export default connect(null, mapDispatchToProps)(App)
