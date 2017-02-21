import React, { Component } from 'react'
import { connect } from 'react-redux'
import ParkDetails from './ParkDetails'
import {updateCurrentPark} from '../actions/index.js'
import {bindActionCreators} from 'redux'
import {browserHistory} from 'react-router'

class TripThumbnail extends Component {

  handleClick(e) {
    this.props.updateCurrentPark(this.props.park)
    browserHistory.push(`/parks/${this.props.park.id}`)
  }

  render() {
    var buttonStyle = {
      cursor: "pointer"
    }
    return (
      <div onClick= {this.handleClick.bind(this)} className="TripThumbnail dim">
        <h4 className="TripThumbnailText" style={buttonStyle}>{this.props.park.name}</h4>
      </div>
    )
  }
}
// <h5 className="TripThumbnailText">{this.props.park.states}</h5>


// style={{backgroundImage: `url(${this.props.park.image_url})`, backgroundSize: '500px, 400px'}}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({updateCurrentPark}, dispatch)
}

export default connect(null, mapDispatchToProps)(TripThumbnail)
