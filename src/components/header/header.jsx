import React, { Component } from 'react'
import './css/header.scss'
import { 
  NavLink
} from "react-router-dom"
import Search from "../common/search/search"

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <div className='logo'>CWR</div>
        <Search />
        {
          sessionStorage['token'] ? (
            <NavLink to={ '/user' } className='login iconfont iconyonghu' />
          ) : (
            <NavLink to={ '/login' } className='login iconfont iconyonghu' />
          )
        }
      </header>
    )
  }
}
