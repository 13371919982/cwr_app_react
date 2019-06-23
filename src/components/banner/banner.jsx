import React, { Component } from 'react'
import './css/banner.scss'
import Swiper from "swiper"
import {
  NavLink
} from "react-router-dom"

export default class Banner extends Component {
  state = {
    list: []
  }

  carousel() {
    new Swiper('.swiper-container', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true
    })
  }

  componentDidMount() {
    // 请求轮播图片
    this.axios.get('/index/carousel').then(res => {
      this.setState({
        list: res
      })
      this.carousel()
    })

  }
  render() {
    return (
      <div className='banner swiper-container'>
        <ul className='swiper-wrapper'>
          {
            this.state.list.length > 0 && this.state.list.map((item, i) => {
              return (
                <li className='swiper-slide' key={i}>
                  <NavLink to="/details/1">
                    <img src={item.img} alt="" />
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
