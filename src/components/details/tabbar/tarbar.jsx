import React, { Component } from 'react'
import './css/tarbar.scss'
import { 
  NavLink
} from "react-router-dom"

export default class Tarbar extends Component {
  render() {
    const { path, addCartHandler } = this.props
    return (
      <div className='tarbar'>
        <a href="/">
          <i className='iconfont iconkefu'></i>
        </a>
        <NavLink to={ path }>
          <i className='iconfont iconcart1'></i>
        </NavLink>
        <input
          className='add-cart' 
          type="button" 
          defaultValue='加入购物车'
          onClick={ ()=>{ addCartHandler() } }
        />
        <input className='buy' type="button" defaultValue='立即购买'/>
      </div>
    )
  }
}
