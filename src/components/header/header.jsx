import React, { Component } from 'react'
import './css/header.scss'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='logo'>CWR</div>
        <div className='search'>
          <i className='iconfont iconsousuo'></i>
          <span>搜索商品名称</span>
        </div>
        <div className='login iconfont iconyonghu'></div>
      </header>
    )
  }
}
