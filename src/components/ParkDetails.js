import React, { Component } from 'react'
import { connect } from 'react-redux'


class ParkDetails extends Component {

  render() {
    if (!this.props.currentPark) {
      return <div></div>
    }

    return (
      <div className="ParkDetails fl w-two-thirds" >
        <h2 className="ParkDetailsText">{this.props.currentPark.name}</h2>
        <h2 className="ParkDetailsText">{this.props.currentPark.states}</h2>
        <h2 className="ParkDetailsText">{this.props.currentPark.description}</h2>
      </div>
    )
  }
}


//style={{backgroundImage: `url(${this.props.currentPark.image_url})`, backgroundSize: '100% 100%'}}

function mapStateToProps(state) {
  return {
    currentPark: state.currentPark
  }
}
export default connect(mapStateToProps)(ParkDetails)
