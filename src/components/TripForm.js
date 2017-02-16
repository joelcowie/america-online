import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createTrip } from '../actions/index'
import { connect } from 'react-redux'

class TripForm extends Component{

  handleSubmit(event) {
    event.preventDefault()
    const trip = {name: this.refs.name.value}
    this.props.createTrip(trip)

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

export default connect(null, mapDispatchToProps)(TripForm)
