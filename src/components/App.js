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
import {fetchUser, updateCurrentTrip} from '../actions/index.js'
import {bindActionCreators} from 'redux'

class App extends Component {

  componentDidMount() {
    if (sessionStorage.length !== 0) {
      this.props.fetchUser(sessionStorage.getItem('jwt'))
    }

    if (this.props.currentTrip.trip !== {}) {
      this.props.updateCurrentTrip()
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="dt w-100 border-box pa3 ph5-ns">
          <h3 className="dtc v-mid mid-gray link w-25">Roadtripper</h3>
          <Nav/>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser, updateCurrentTrip}, dispatch)
}

function mapStateToProps(state) {
  return {
    currentTrip: state.currentTrip
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App)
