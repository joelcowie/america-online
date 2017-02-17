import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/index'
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'

class UserSignUp extends Component{

  handleSubmit(event) {
    event.preventDefault()
    const user = {name: this.refs.name.value, email: this.refs.email.value, password: this.refs.userPassword.value, password_confirmation: this.refs.passwordConfirmation.value}
    this.props.createUser(user)
    browserHistory.push('/')
  }

  render() {
    // if (!this.props.signUp) {
    //   return <div></div>
    // }

    return (
      <div className="user-sign-up fl w-third">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input ref='name' placeholder='Enter Name' /><br/>
          <input ref='email' placeholder='Enter Email' /><br/>
          <input type='password' ref='userPassword' placeholder='Enter password'/><br/>
          <input type='password' ref='passwordConfirmation' placeholder='Confirm password'/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createUser}, dispatch)
}

function mapStateToProps(state) {
  return {signUp: state.signUp}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
