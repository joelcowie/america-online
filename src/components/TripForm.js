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
        <div className="trip-create fl w-third">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input ref='name' placeholder='Enter Name' /><br/>
            <button type='submit'>Submit</button>
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
