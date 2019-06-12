import React, { Component } from 'react'
import './css/goods.scss'

export default class Goods extends Component {
  render() {
    return (
      <div className='goods'>
        <ul>
          <li>
            <a href="/">
              <div className='goods-shop'>
                <img src={require('./img/1548384408489590.jpg')} alt=""/>
              </div>
              <p className='goods-title'>主标题</p>
              <p className='goods-des'>副标题</p>
              <p className='goods-price'>￥319</p>
            </a>
          </li>
          <li>
            <a href="/">
              <div className='goods-shop'>
                <img src={require('./img/1548384408489590.jpg')} alt=""/>
              </div>
              <p className='goods-title'>主标题</p>
              <p className='goods-des'>副标题</p>
              <p className='goods-price'>￥319</p>
            </a>
          </li>
          <li>
            <a href="/">
              <div className='goods-shop'>
                <img src={require('./img/1548384408489590.jpg')} alt=""/>
              </div>
              <p className='goods-title'>主标题</p>
              <p className='goods-des'>副标题</p>
              <p className='goods-price'>￥319</p>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
