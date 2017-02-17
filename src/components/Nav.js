import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser, signUpRender, loginRender, tripFormRender } from '../actions/index.js'
import {bindActionCreators} from 'redux'
import { Link } from 'react-router'



class Nav extends Component {

  handleClickSignUp() {
    this.props.signUpRender()
  }

  handleClickLogin() {
    this.props.loginRender()
  }

  handleClickMakeTrip() {
    this.props.tripFormRender()
  }

  handleClickLogout() {
    this.props.logOutUser()
    sessionStorage.removeItem('jwt')
  }


  render() {

    if (!this.props.user.name) {
      return (
        <div className="dtc v-mid w-75 tr">
          <Link className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" to="/signup" title="Sign up">Sign up</Link>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" onClick={this.handleClickLogin.bind(this)} title="Login">Login</a>
        </div>
      )
    } else {
      return (
        <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" onClick={this.handleClickMakeTrip.bind(this)} title="Make Trip">Make Trip</a>
          <a className="link dim dark-gray f6 f5-ns dib" onClick={this.handleClickLogout.bind(this)} title="Logout">Logout</a>
        </div>
      )

    }

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOutUser, signUpRender, loginRender, tripFormRender}, dispatch)
}


function mapStateToProps(state) {
  return {
      user: state.currentUser
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
