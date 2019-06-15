import React, { Component } from 'react'
import './css/details.scss'
import Tarbar from './tabbar/tarbar'
import Count from '../common/count/count'
import Topnav from "../common/topnav/topnav"
import Alert from "../common/alert/alert"

// import { connect } from "react-redux"

// @connect(
//   state=>({ details: state }),
//   {}
// )

export default class Details extends Component {
  state = {
    data: [],
    lid: this.props.match.params.lid,
    count: 1,
    icon: 'iconfont iconshoucang2',
    alert: false,
    msg: '加入购物车成功'
  }

  componentDidMount() {
    // 请求商品详情
    this.axios.get( '/detail/detail', { params: {
      lid: this.state.lid
    }}).then(res => 
      this.setState({
        data: res[0]
      })
    )

    // 验证用户是否收藏
    this.axios.get( '/detail/additemlid', { params: {
      uname: sessionStorage['uname'],
      lid: this.state.lid
    }}).then(res => {
      if ( res.length>0) {
        this.setState({
          icon: 'iconfont iconshoucang1'
        })
      }
    })
  }

  // 商品数量自减
  subHandler = ( count) => {
    if(count <= 1) return
    count--
    this.setState({
      count
    })
  }

  // 商品数量自增
  addHandler = ( count) => {
    count++
    this.setState({
      count
    })
  }

  // 加入收藏
  addCollectHandler = () => {
    if(this.state.icon === 'iconfont iconshoucang2') {
      this.axios.get( '/detail/additem', { params: {
        uname: sessionStorage['uname'],
        lid: this.state.lid
      }}).then(res => {
        this.alertHandler()
        this.setState({
          icon: 'iconfont iconshoucang1',
          msg: '收藏成功'
        })
      })
    } else if (this.state.icon === 'iconfont iconshoucang1') {
      this.axios.get( '/detail/deleteAdditem', { params: {
        uname: sessionStorage['uname'],
        lid: this.state.lid
      }}).then(res => {
        this.alertHandler()
        this.setState({
          icon: 'iconfont iconshoucang2',
          msg: '取消收藏'
        })
      })
    }
  }

  // 封装提示框以便重复利用
  alertHandler () {
    this.setState({
      alert: true,
    })
    setTimeout(() => {
      this.setState({
        alert: false
      })
    }, 1500)
  }

  // 加入购物车
  addCartHandler = () => {
    if( sessionStorage['token']) {
      this.axios.get( '/detail/productLid', { params:{
        uname:sessionStorage['uname'],
        lid:this.state.lid
      }}).then(res => {
        if( res.length>0) {
          this.axios.get( '/detail/update', { params:{
            lid: this.state.lid,
            count: this.state.count,
            isChecked: 0
          }}).then(res => {
            this.alertHandler()
            this.setState({
              msg: '加入购物车成功'
            })
          })
        } else {
          this.axios.get( '/detail/addcar', { params:{
            uname: sessionStorage['uname'],
            lid: this.state.lid,
            count: this.state.count,
            isChecked: 0
          }}).then(res=> {
            this.alertHandler()
            this.setState({
              msg: '加入购物车成功'
            })
          })
        }
      })
    } else {
      this.props.history.push( '/login')
    }
  }

  // 历史记录返回一次
  backHistoryHandler = () => this.props.history.goBack( -1)


  // 组件即将卸载 不要更新state状态
  componentWillUnmount () { 
    this.setState = () => {
      return
    }
  }

  render() {
    const { img, detail, brand, price, promise } = this.state.data
    return (
      <div className='details'>
        <Topnav 
          backHistoryHandler={ this.backHistoryHandler }
          centerText={ brand }
        />
        <ul>
          <li>
            <img src={ img } alt=""/>
          </li>
        </ul>
        <span onClick={ ()=>{ this.addCollectHandler() } } className={ this.state.icon }></span>
        <h4 className='details-title'>{ detail }</h4>
        <p className='details-des'>{ brand }</p>
        <p className='details-price'>￥ { price }</p>
        <p className='details-promise'>{ promise }</p>
        <div className='container'>
          <span>购买数量：</span>
          <Count
            count={ this.state.count }
            addHandler={ this.addHandler }
            subHandler={ this.subHandler }
          />
        </div>
        <Tarbar
          path={ '/shopcart' }
          addCartHandler={ this.addCartHandler }
        />
        {
          this.state.alert && (
            <Alert
              icon={ 'iconfont icongou' }
              msg={ this.state.msg }
            />
          )
        }
      </div>
    )
  }
}
