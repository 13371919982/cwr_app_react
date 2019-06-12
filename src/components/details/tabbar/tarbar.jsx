import React, { Component } from 'react'
import './css/tarbar.scss'

export default class Tarbar extends Component {
  render() {
    return (
      <div className='tarbar'>
        <a href="/">
          <i className='iconfont iconkefu'></i>
        </a>
        <a href="/">
          <i className='iconfont iconcart1'></i>
        </a>
        <input className='add-cart' type="button" defaultValue='加入购物车'/>
        <input className='buy' type="button" defaultValue='立即购买'/>
      </div>
    )
  }
}
