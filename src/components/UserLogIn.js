import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { logInUser } from '../actions/index'
import { connect } from 'react-redux'

class UserLogIn extends Component{

  handleSubmit(event) {
    event.preventDefault()
    const user = {email: this.refs.email.value, password: this.refs.userPassword.value}
    this.props.logInUser(user)
  }

  render() {

    if (!this.props.login) {
      return <div></div>
    }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logInUser}, dispatch)
}

function mapStateToProps(state){
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogIn)
