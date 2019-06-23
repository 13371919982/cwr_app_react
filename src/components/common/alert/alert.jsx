import React, { Component } from 'react'
import './css/alert.scss'

export default class Alert extends Component {
  render() {
    const { icon, msg } = this.props
    return (
      <div className='alert'>
        <i className={icon}></i>
        <span>{msg}</span>
      </div>
    )
  }
}
