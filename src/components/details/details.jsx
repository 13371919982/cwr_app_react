import React, { Component } from 'react'
import './css/details.scss'
import Tarbar from './tabbar/tarbar';
import Count from '../count/count'

export default class Details extends Component {
  render() {
    return (
      <div className='details'>
        <ul>
          <li>
            <img src={require('./img/1548384408490466.jpg')} alt=""/>
          </li>
        </ul>
        <h4 className='details-title'>主标题</h4>
        <p className='details-des'>副标题</p>
        <p className='details-price'>价格</p>
        <p className='details-promise'>2-4工作日英国发货</p>
        <div className='container'>
          <span>购买数量：</span>
          <Count />
        </div>
        <Tarbar />
      </div>
    )
  }
}
