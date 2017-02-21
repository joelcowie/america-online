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
import {fetchUser, fetchTrip, updateCurrentPark} from '../actions/index.js'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router'


class App extends Component {

  componentDidMount() {
    if (sessionStorage.length !== 0) {
      this.props.fetchUser(sessionStorage.getItem('jwt'))
    }
    this.props.fetchTrip()
  }

  render() {
    return (
      <div className="App">
        <nav className="dt w-100 border-box ph5-ns">
          <Link className="dtc v-mid light-gray link w-25" to="/"><h2>Parks Explorer</h2></Link>
          <Nav/>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser, fetchTrip, updateCurrentPark}, dispatch)
}

export default connect(null, mapDispatchToProps)(App)
