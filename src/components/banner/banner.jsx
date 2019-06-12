import React, { Component } from 'react'
import './css/banner.scss'
import Swiper from "swiper";

export default class Banner extends Component {
  componentDidMount() {
    new Swiper('.swiper-container', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
      },
      loop : true
    })

    // 请求轮播图片
    fetch('')
  }
  render() {
    return (
      <div className='banner swiper-container'>
        <ul className='swiper-wrapper'>
          <li className='swiper-slide'><a href="/"><img src={require('./img/banner1.png')} alt=""/></a></li>
          <li className='swiper-slide'><a href="/"><img src={require('./img/banner2.png')} alt=""/></a></li>
          <li className='swiper-slide'><a href="/"><img src={require('./img/banner3.png')} alt=""/></a></li>
        </ul>
      </div>
    )
  }
}
