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
  // fl w-third pa4 black-80


// mw5 mw7-ns center bg-light-gray pa3 ph5-ns
  render() {
    return (
      <div>
      <div className="v-100 TripForm" style={{backgroundImage: 'url(https://www.nps.gov/common/uploads/photogallery/nri/park/nightskies/0D14E3AA-1DD8-B71B-0BE05360F74F3C11/0D14E3AA-1DD8-B71B-0BE05360F74F3C11.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '100%, 100%', backgroundAttachment: 'fixed'}}>
      </div>
        <div className="v-mid pa4 black-80 tc">
          <h2 className="tc">Name Your Trip</h2>
          <form className="" onSubmit={this.handleSubmit.bind(this)}>
          <div className ="">
            <input className= "fc pa3 input-reset ba bg-transparent w-100 measure center tc" ref='name' placeholder='Enter Name' /><br/>
          </div>
          <div className ="">
            <button className="fc f6 link dim ma3 ph3 pv2 mb2 dib white bg-black center measure tc" type='submit'>Submit</button>
          </div>
          </form>
        </div>
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
