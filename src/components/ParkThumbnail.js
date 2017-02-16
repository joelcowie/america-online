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
      <div onClick= {this.handleClick.bind(this)} className="ParkThumbnail dim" style={{backgroundImage: `url(${this.props.park.image_url})`, backgroundSize: '500px, 400px'}}>
        <h4 className="ParkThumbnailText">{this.props.park.name}</h4>
        <h5 className="ParkThumbnailText">{this.props.park.states}</h5>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateCurrentPark}, dispatch)
}



export default connect(null, mapDispatchToProps)(ParkThumbnail)
