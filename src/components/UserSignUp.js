import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser, logInUser } from '../actions/index'
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
    return (
      <div className="user-sign-up fl w-third pa4 black-80">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className ="mt3">
            <input className= "fc pa2 input-reset ba bg-transparent w-100 measure" ref='name' placeholder='Enter Name' /><br/>
          </div>
          <div className ="mt3">
            <input className= "fc pa2 input-reset ba bg-transparent w-100 measure" ref='email' placeholder='Enter Email' /><br/>
          </div>
          <div className ="mt3">
            <input className= "fc pa2 input-reset ba bg-transparent w-100 measure" type='password' ref='userPassword' placeholder='Enter password'/><br/>
          </div>
          <div className ="mt3">
            <input className= "fc pa2 input-reset ba bg-transparent w-100 measure" type='password' ref='passwordConfirmation' placeholder='Confirm password'/>
          </div>
          <div className="mt3">
            <button className="fc f6 link dim ph3 pv2 mb2 dib white bg-black" type='submit'>Submit</button>
          </div>
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
