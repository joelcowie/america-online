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
      <div>
      <div className="v-100 TripForm" style={{backgroundImage: 'url(https://s-media-cache-ak0.pinimg.com/originals/6a/4a/e4/6a4ae40ef3be0d57fe1a2f9a003132de.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: '100%, 100%', backgroundAttachment: 'fixed'}}>
      </div>
      <div className="v-mid pa4 black-80 tc">
        <h2 className="tc">Sign Up</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className ="">
            <input className= "fc ma2 pa3 input-reset ba bg-transparent w-100 measure center tc" ref='name' placeholder='Enter Name' /><br/>
          </div>
          <div className ="">
            <input className= "fc ma2 pa3 input-reset ba bg-transparent w-100 measure center tc" ref='email' placeholder='Enter Email' /><br/>
          </div>
          <div className ="">
            <input className= "fc ma2 pa3 input-reset ba bg-transparent w-100 measure center tc" type='password' ref='userPassword' placeholder='Enter password'/><br/>
          </div>
          <div className ="">
            <input className= "fc ma2 pa3 input-reset ba bg-transparent w-100 measure center tc" type='password' ref='passwordConfirmation' placeholder='Confirm password'/>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createUser}, dispatch)
}

function mapStateToProps(state) {
  return {signUp: state.signUp}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp)
