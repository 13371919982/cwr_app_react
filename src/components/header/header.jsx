import React, { Component } from 'react'
import './css/header.scss'
import {
  NavLink
} from "react-router-dom"

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='logo'>CWR</div>
        <NavLink to='/classify' className='search'>
          <i className='iconfont iconsousuo'></i>
          <span>CWR 特惠专场</span>
        </NavLink>
        {
          sessionStorage['token'] ? (
            <NavLink to={'/user'} className='login iconfont iconyonghu' />
          ) : (
              <NavLink to={'/login'} className='login iconfont iconyonghu' />
            )
        }
      </header>
    )
  }
}
