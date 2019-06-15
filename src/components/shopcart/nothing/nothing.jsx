import React, { Component } from 'react'
import "./css/nothing.scss"
import {
  NavLink
} from "react-router-dom"

export default class Nothing extends Component {
  render() {
    return (
      <div className='nothing'>
        <i className='iconfont icongouwuchekongkongruye'></i>
        <h1>购物车还是空的，快去逛逛吧</h1>
        <NavLink to={ '/' }>去逛逛</NavLink>
      </div>
    )
  }
}
