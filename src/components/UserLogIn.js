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
      <div className="user-log-in fl w-third">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref='email' placeholder='Enter Email' /><br/>
          <input type='password' ref='userPassword' placeholder='Enter password'/><br/>
          <button type='submit'>Submit</button>
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
