import React, { Component } from 'react'
import './css/user.scss'
import Classes from '../common/classes/classes'
import Table from '../common/table/table';

export default class User extends Component {
  state = {
    list: [
      { icon: 'iconfont iconziyuan icon1', title: '待付款' },
      { icon: 'iconfont iconiconfonttaobaozhongchoudisiqiqiche icon2', title: '待收货' },
      { icon: 'iconfont iconyiwancheng icon3', title: '已完成' },
      { icon: 'iconfont icondingdan icon4', title: '全部订单' }
    ],
    serverList: [
      { icon: 'iconfont icondatabase', title: '积分' },
      { icon: 'iconfont iconyouhuiquan', title: '优惠券' },
      { icon: 'iconfont iconlipinqia1', title: '礼品卡' },
      { icon: 'iconfont iconshoucang', title: '收藏商品' },
      { icon: 'iconfont iconzuijinliulan', title: '最近浏览' },
      { icon: 'iconfont icondizhiguanli', title: '地址管理' },
      { icon: 'iconfont iconpintuan', title: '拼团' },
      { icon: 'iconfont icondapeida', title: '制作搭配' },
      { icon: 'iconfont iconkefu', title: '客服咨询' },
    ]
  }
  render() {
    return (
      <div className='user'>
        <a href="/" className='login'>
          <i className='iconfont iconyonghu'></i>
          <span>未登录</span>
        </a>
        <Classes 
          list={ this.state.list }
        />
        <Table 
          list={ this.state.serverList }
        />
        <p>客服电话：13371919982</p>
      </div>
    )
  }
}
