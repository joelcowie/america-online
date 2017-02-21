import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createTrip } from '../actions/index'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { browserHistory } from 'react-router'

class TripForm extends Component{

  handleSubmit(event) {
    event.preventDefault()
    const trip = {name: this.refs.name.value}
    this.props.createTrip(trip)
    browserHistory.push('/')
  }

  render() {
    return (
        <div className="trip-create fl w-third pa4 black-80">
          <form onSubmit={this.handleSubmit.bind(this)}>
          <div className ="mt3">
            <input className= "fc pa2 input-reset ba bg-transparent w-100 measure" ref='name' placeholder='Enter Name' /><br/>
          </div>
          <div className ="mt3">
            <button className="fc f6 link dim ph3 pv2 mb2 dib white bg-black" type='submit'>Submit</button>
          </div>
          </form>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createTrip}, dispatch)
}

function mapStateToProps(state) {
  return {
    tripForm: state.tripForm
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripForm)
