import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { logInUser, fetchTrip } from '../actions/index'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Modal } from 'react-modal'
import { afterOpenFn } from 'react-modal'
import { requestCloseFn } from 'react-modal'
import { closeTimeoutMS } from 'react-modal'
import { customStyle } from 'react-modal'

class UserLogIn extends Component{

  handleSubmit(event) {
    event.preventDefault()
    const user = {email: this.refs.email.value, password: this.refs.userPassword.value}
    this.props.logInUser(user)
    browserHistory.push('/')
  }

  render() {
    return (
      <div>
      <div className="v-100 TripForm" style={{backgroundImage: 'url(https://fulltimegypsies.files.wordpress.com/2015/10/tunnel-view-panorama-ansel-adams-style.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '100%, 100%', backgroundAttachment: 'fixed'}}>
      </div>
      <div className="v-mid pa4 black-80 tc">
        <h2 className="tc">Log In</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className ="">
            <input className= "fc ma3 pa3 input-reset ba bg-transparent w5 measure center tc" ref='email' placeholder='Enter Email' /><br/>
          </div>

          <div className ="">
            <input className= "fc ma2 pa3 input-reset ba bg-transparent w5 measure center tc" type='password' ref='userPassword' placeholder='Enter password'/><br/>
          </div>

          <div className="">
            <button className="fc f6 link dim ma3 ph3 pv2 mb2 dib white bg-black center measure tc" type='submit'>Submit</button>
          </div>
        </form>
      </div>
      </div>

    )
  }
}

// </Modal>
// <Modal isOpen={false} onAfterOpen={afterOpenFn} onRequestClose={requestCloseFn} closeTimeoutMS={2} style={style} contentLabel="Modal">

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logInUser, fetchTrip}, dispatch)
}

function mapStateToProps(state){
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogIn)
