import React, { Component } from 'react'
import "./css/login.scss"

export default class Login extends Component {
  render() {
    return (
      <div className='login'>
        <img src={require('./img/bgc.png')} alt=""/>
        <div className="bgc"></div>
        <div className='container'>
          <p><input type="text" placeholder='请输入您的手机号'/></p>
          <p><input type="text" placeholder='请输入验证码'/></p> 
          <button>获取验证码</button>
          <input className="btn" type="button" defaultValue='登录'/>
          <div className='foot'>
            <a href='/'>忘记密码？</a>
            <a href='/'>使用账号密码登录</a>
          </div>
        </div>
      </div>
    )
  }
}
