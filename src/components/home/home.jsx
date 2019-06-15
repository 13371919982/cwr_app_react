import React, { Component } from 'react'
import Header from "../header/header"
import Banner from "../banner/banner"
import Category from "../category/category"
import Goods from "../goods/goods"
import Tabbar from "../tabbar/tabbar"

export default class Home extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app'>
          <Header />
          <Banner />
          <Category />
          <Goods />
          <Tabbar />
        </div>
      </div>
    )
  }
}
