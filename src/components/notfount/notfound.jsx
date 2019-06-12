import React, { Component } from 'react'
import './css/notfound.scss'

export default class NotFound extends Component {
  render() {
    return (
      <div className='notfound'>
        <h1>NotFound 404</h1>
        <h2>您访问的网页不存在</h2>
      </div>
    )
  }
}
