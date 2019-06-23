import React, { Component } from 'react'
import './css/tabbar.scss'
import {
  NavLink
} from "react-router-dom"

export default class Tabbar extends Component {
  state = {
    list: [
      { path: '/home', icon: 'iconfont iconshouye1', title: '首页' },
      { path: '/classify', icon: 'iconfont iconclassifi', title: '分类' },
      { path: '/shopcart', icon: 'iconfont iconcart1', title: '购物车' },
      { path: '/user', icon: 'iconfont iconyonghu', title: '我的' }
    ]
  }
  render() {
    return (
      <div className='tabbar'>
        <ul>
          {
            this.state.list.length > 0 && this.state.list.map((item, i) => {
              return (
                <li key={i}>
                  <NavLink to={item.path} className={item[i] ? 'active' : ''}>
                    <i className={item.icon}></i>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
