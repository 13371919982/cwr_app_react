import React, { Component } from 'react'
import './css/goods.scss'
import {  
  NavLink
} from "react-router-dom"

export default class Goods extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    // 请求商品列表
    this.axios.get('/product/default').then(res => 
      this.setState({
        list: res
      })
    )
  }

  render() {
    return (
      <div className='goods'>
        <ul>
          {
            this.state.list.length > 0 && this.state.list.map((item,i)=>{
              return (
                <li key={ i }>
                  <NavLink to={ `/details/${ item.lid }` }>
                    <div className='goods-shop'>
                      <img src={ item.img } alt=""/>
                    </div>
                    <p className='goods-title'>{ item.detail }</p>
                    <p className='goods-des'>{ item.brand }</p>
                    <p className='goods-price'>￥ { item.price }</p>
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
