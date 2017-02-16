import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logOutUser, signUpRender, loginRender } from '../actions/index.js'
import {bindActionCreators} from 'redux'



class Nav extends Component {

  handleClickSignUp() {
    this.props.signUpRender()
  }

  handleClickLogin() {
    this.props.loginRender()
  }


  handleClickLogout() {
    this.props.logOutUser()
    sessionStorage.removeItem('jwt')
  }


  render() {

    if (!this.props.user.name) {
      return (
        <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" onClick={this.handleClickSignUp.bind(this)} title="Sign up">Sign up</a>
          <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" onClick={this.handleClickLogin.bind(this)} title="Login">Login</a>
        </div>
      )
    } else {
      return (
        <div className="dtc v-mid w-75 tr">
          <a className="link dim dark-gray f6 f5-ns dib " onClick={this.handleClickLogout.bind(this)} title="Logout">Logout</a>
        </div>
      )

    }

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOutUser, signUpRender, loginRender }, dispatch)
}


function mapStateToProps(state) {
  return {
      user: state.currentUser
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)
