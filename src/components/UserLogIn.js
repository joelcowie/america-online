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
      <div className="login user-log-in fl w-third pa4 black-80">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className ="mt3">
            <input className= "fc pa2 input-reset ba bg-transparent w-100 measure" ref='email' placeholder='Enter Email' /><br/>
          </div>

          <div className ="mt3">
            <input className= "fc pa2 input-reset ba bg-transparent w-100 measure" type='password' ref='userPassword' placeholder='Enter password'/><br/>
          </div>

          <div className="mt3">
            <button className="fc f6 link dim ph3 pv2 mb2 dib white bg-black" type='submit'>Submit</button>
          </div>
        </form>
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
