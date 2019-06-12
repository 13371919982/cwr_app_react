import React, { Component } from 'react'
import './css/count.scss'

export default class Count extends Component {
  render() {
    return (
      <div className='count'>
        <input type="button" defaultValue='-'/>
        <span>1</span>
        <input type="button" defaultValue='+'/>
      </div>
    )
  }
}
