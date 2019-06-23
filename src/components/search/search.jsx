import React, { Component } from 'react'
import './css/search.scss'

export default class Search extends Component {
  render() {
    return (
      <div className='search'>
        <i className='iconfont iconsousuo'></i>
        <input placeholder='CWR 特惠专场' autoFocus />
      </div>
    )
  }
}
