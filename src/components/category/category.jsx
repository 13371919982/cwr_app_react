import React, { Component } from 'react'
import Classes from "../common/classes/classes";

export default class Category extends Component {
  state = {
    list: [
      { icon: 'iconfont iconxinpin icon1', title: '新品上市' },
      { icon: 'iconfont iconzhenxuan icon2', title: '每日臻选' },
      { icon: 'iconfont iconmiaosha icon3', title: '限购秒杀' },
      { icon: 'iconfont iconchaozhitemai1 icon4', title: '超值特卖' }
    ]
  }
  render() {
    return (
      <div className='category'>
        <Classes 
          list={ this.state.list }
        />
      </div>
    )
  }
}
