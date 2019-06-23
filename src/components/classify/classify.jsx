import React, { Component } from 'react'
import './css/classify.scss'
import Tabbar from "../tabbar/tabbar"
import Search from '../search/search'

export default class Classify extends Component {
  render() {
    return (
      <div className='classify'>
        <div className='container'>
          <Search />
        </div>
        <Tabbar />
      </div>
    )
  }
}
