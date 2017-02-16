import React, { Component } from 'react'
import { connect } from 'react-redux'


class Nav extends Component {

  handleClick() {

  }

  render() {


    return (
      <div className="dtc v-mid w-75 tr">
        <a className="link dim dark-gray f6 f5-ns dib mr3 mr4-ns" onClick={this.handleClick.bind(this)} title="Sign up">Sign up</a>
        <a className="link dim dark-gray f6 f5-ns dib" onClick={this.handleClick.bind(this)} title="Login">Login</a>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentPark: state.currentPark
  }
}
export default connect(mapStateToProps)(Nav)
