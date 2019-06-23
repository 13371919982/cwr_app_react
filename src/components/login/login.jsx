import React, { Component } from 'react'
import "./css/login.scss"
import Topnav from "../common/topnav/topnav"
import qs from "qs"
import Alert from "../common/alert/alert"

export default class Login extends Component {
  state = {
    centerText: '登录',
    rightBtn: '注册',
    uname: '',
    upwd: '',
    unameText: '请输入您的手机号',
    loginToggle: '使用账号密码登录',
    codeText: '请输入验证码',
    icon: 'iconfont iconyanjing',
    type: 'text',
    alert: false,
    msg: ''
  }

  // 监听 uname的变化
  unameHandler = (e) => this.setState({ uname: e.target.value })


  // 监听 upwd的改变
  upwdHandler = (e) => this.setState({ upwd: e.target.value })


  // 清空 uname
  clearHandler = () => this.setState({ uname: '' })

  // 封装重置注册初始化
  resetHandler() {
    return this.setState({
      uname: '',
      upwd: '',
      centerText: '注册',
      rightBtn: '登录',
      unameText: '请输入您的手机号',
      loginToggle: '使用账号密码登录',
      codeText: '请输入验证码',
      type: 'text'
    })
  }

  // 右上角注册
  rightBtnHandler = () => {
    // 调用封装好的重置函数
    if (this.state.rightBtn === '登录') {
      this.resetHandler()
      this.setState({
        centerText: '登录',
        rightBtn: '注册'
      })
    } else if (this.state.rightBtn === '注册') {
      this.resetHandler()
    }
  }

  // 密码隐藏切换
  iconToggleHandler = () => {
    if (this.state.icon === 'iconfont iconyanjing') {
      this.setState({
        icon: 'iconfont iconyanjing1',
        type: 'text'
      })
    } else if (this.state.icon === 'iconfont iconyanjing1') {
      this.setState({
        icon: 'iconfont iconyanjing',
        type: 'password'
      })
    }
  }

  // 登录按钮的变化
  btnTextHandler = (e) => {
    this.setState({
      centerText: e.target.value
    })
  }

  // 切换登录、注册
  toggleHandler() {
    if (this.state.loginToggle === '使用账号密码登录') {
      this.setState({
        uname: '',
        upwd: '',
        unameText: '请输入您的邮箱/手机号',
        loginToggle: '使用手机号登录',
        codeText: '请输入密码',
        type: 'password'
      })
    } else if (this.state.loginToggle === '使用手机号登录') {
      // 调用封装好的重置函数
      this.resetHandler()
      this.setState({
        centerText: '登录',
        rightBtn: '注册'
      })
    }
  }

  // 登录按钮disabled处理
  disabledHandler() {
    return !this.state.uname || !this.state.upwd
  }

  // 登录请求跳转
  loginHandler() {
    this.axios.post('/user/login', qs.stringify({
      uname: this.state.uname,
      upwd: this.state.upwd
    })).then(res => {
      if (res !== 1) {
        sessionStorage['token'] = res
        sessionStorage['uname'] = this.state.uname
        this.setState({
          alert: true,
          msg: '登录成功'
        })
        setTimeout(() => {
          this.setState({
            alert: false
          })
          this.props.history.push('/user')
        }, 1500)
      } else {
        this.setState({
          alert: true,
          msg: '账号或者密码错误'
        })
        setTimeout(() => {
          this.setState({
            alert: false
          })
        }, 1000)
      }
    })
  }

  // 历史记录返回一次
  backHistoryHandler = () => this.props.history.goBack(-1)

  // 组件即将卸载 不要更新state状态
  componentWillUnmount() {
    this.setState = () => {
      return
    }
  }

  render() {
    return (
      <div className='login'>
        <Topnav
          centerText={this.state.centerText}
          rightBtn={this.state.rightBtn}
          rightBtnHandler={this.rightBtnHandler}
          backHistoryHandler={this.backHistoryHandler}
        />
        <img src={require('./img/bgc.png')} alt="" />
        <div className="bgc"></div>
        <div className='container'>
          <p>
            <input type="text" placeholder={this.state.unameText} value={this.state.uname} onChange={this.unameHandler} />
            {
              this.state.uname !== '' && (
                <span onClick={this.clearHandler}>x</span>
              )
            }
          </p>
          <p>
            <input type={this.state.type} placeholder={this.state.codeText} value={this.state.upwd} onChange={this.upwdHandler} />
            {
              this.state.codeText === '请输入密码' && (
                <span className='icon' onClick={this.iconToggleHandler}><i className={this.state.icon}></i></span>
              )
            }
          </p>
          {
            this.state.codeText === '请输入验证码' && (
              <button>获取验证码</button>
            )
          }
          <input
            className={`btn ${this.disabledHandler() ? 'active' : ''}`}
            type="button"
            value={this.state.centerText}
            onChange={this.btnTextHandler}
            disabled={this.disabledHandler()}
            onClick={() => this.loginHandler()}
          />
          <div className='foot'>
            {
              this.state.centerText !== '注册' && (
                <span onClick={() => { this.toggleHandler() }}>{this.state.loginToggle}</span>
              )
            }
            {
              this.state.loginToggle === '使用手机号登录' && (
                <a href='/'>忘记密码？</a>
              )
            }
          </div>
        </div>
        {
          this.state.alert && (
            <Alert
              msg={this.state.msg}
            />
          )
        }
      </div>
    )
  }
}
