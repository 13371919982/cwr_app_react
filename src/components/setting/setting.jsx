import React, { Component } from 'react'
import './css/setting.scss'
import Topnav from "../common/topnav/topnav"
import {
  NavLink
} from "react-router-dom"

export default class Setting extends Component {
  state = {
    list: [
      { title: '关于我们', path: '/' },
      { title: '隐私条款', path: '/' },
      { title: '帮助中心', path: '/' }
    ]
  }

  // 退出登录
  signOutHandler = () => {
    sessionStorage['token'] = ''
    sessionStorage['uname'] = ''
    this.props.history.push('/user')
  }

  // 历史记录返回一次
  backHistoryHandler = () => this.props.history.goBack(-1)



  render() {
    return (
      <div className='setting'>
        <Topnav
          centerText={'设置'}
          backHistoryHandler={this.backHistoryHandler}
        />
        <ul>
          {
            this.state.list.length > 0 && this.state.list.map((item, i) => {
              return (
                <li key={i}>
                  <NavLink to={item.path}>
                    <span>{item.title}</span>
                    <i className='iconfont iconcombinedshapefuben'></i>
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
        {
          sessionStorage['token'] ? (
            <input
              className='btn'
              type="button"
              defaultValue='退出登录'
              onClick={this.signOutHandler}
            />
          ) : (
              <NavLink className='btn' to='/login'>请登录</NavLink>
            )
        }
      </div>
    )
  }
}
