import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParkDetails from './ParkDetails'
import {updateCurrentPark} from '../actions/index.js'
import {bindActionCreators} from 'redux'

class ParkThumbnail extends Component {

  handleClick(e) {
    this.props.updateCurrentPark(this.props.park)
  }

  render() {
    return (
      <div style = {{color: 'white', backgroundImage: "url('http://i.imgur.com/uVnhkNR.jpg')", height: '300px', width: '400px', backgroundSize: '400px 300px', padding: '0px 0px', margin: '0px 0px'}} onClick= {this.handleClick.bind(this)} className="ParkThumbnail">
        <h4>{this.props.park.name}</h4>
        <h5>{this.props.park.states}</h5>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateCurrentPark}, dispatch)
}



export default connect(null, mapDispatchToProps)(ParkThumbnail)
