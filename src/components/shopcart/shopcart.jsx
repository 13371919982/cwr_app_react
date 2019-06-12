import React, { Component } from 'react'
import './css/shopcart.scss'
import Count from "../count/count"

export default class Shopcart extends Component {
  render() {
    return (
      <div className='shopcart'>
        <ul>
          <li>
            <input type="checkbox"/>
            <img src={require('./img/1548384408490466.jpg')} alt=""/>
            <div className='container'>
              <p className='shopcart-title'>主标题</p>
              <p className='shopcart-title'>副标题</p>
              <p className='shopcart-size'>尺码</p>
              <div>
                <span className='shopcart-price'>价格</span>
                <Count />
              </div>
            </div>
          </li>
          <li>
            <input type="checkbox"/>
            <img src={require('./img/1548384408490466.jpg')} alt=""/>
            <div className='container'>
              <p className='shopcart-title'>主标题</p>
              <p className='shopcart-title'>副标题</p>
              <p className='shopcart-size'>尺码</p>
              <div>
                <span className='shopcart-price'>价格</span>
                <Count />
              </div>
            </div>
          </li>
          <li>
            <input type="checkbox"/>
            <img src={require('./img/1548384408490466.jpg')} alt=""/>
            <div className='container'>
              <p className='shopcart-title'>主标题</p>
              <p className='shopcart-title'>副标题</p>
              <p className='shopcart-size'>尺码</p>
              <div>
                <span className='shopcart-price'>价格</span>
                <Count />
              </div>
            </div>
          </li>
        </ul>
        <div className='total'>
          <div className='left'>
            <input type="checkbox"/>
            <span>合计金额：￥0</span> 
          </div>
          <input className='btn' type="button" defaultValue='结算'/>
        </div>
      </div>
    )
  }
}
