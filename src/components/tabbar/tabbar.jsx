import React, { Component } from 'react'
import './css/tabbar.scss'

export default class Tabbar extends Component {
  render() {
    return (
      <div className='tabbar'>
        <ul>
          <li>
            <a href="/" className='active'>
              <i className='iconfont iconshouye1'></i>
              <span>首页</span>
            </a> 
          </li>
          <li>
            <a href="/">
              <i className='iconfont iconclassifi'></i>
              <span>分类</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className='iconfont iconcart1'></i>
              <span>购物车</span>
            </a>
          </li>
          <li>
            <a href="/">
              <i className='iconfont iconyonghu'></i>
              <span>我的</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
