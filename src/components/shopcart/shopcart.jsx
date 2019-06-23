import React, { Component } from 'react'
import './css/shopcart.scss'
import Count from "../common/count/count"
import Tarbar from "../tabbar/tabbar"
import Topnav from "../common/topnav/topnav"
import Alert from "../common/alert/alert"
import Nothing from "./nothing/nothing"

export default class Shopcart extends Component {
  state = {
    list: [],
    checkedAll: false,
    alert: false
  }

  componentDidMount() {
    // 请求用户购物车清单
    this.axios.get('/shoppingcart/cartList', {
      params: {
        uname: sessionStorage['uname']
      }
    }).then(res => {
      if (res.length > 0) {
        this.setState({
          list: res
        })
      }
    })
  }

  // 商品数量自减
  subHandler = (count, i) => {
    count--
    if (count < 1) return
    let list = this.state.list
    list[i].count = count
    this.setState({
      list
    })
  }

  // 商品数量自增
  addHandler = (count, i) => {
    count++
    let list = this.state.list
    list[i].count = count
    this.setState({
      list
    })
  }

  // 监听修改复选
  isCheckedHandler = (i, e) => {
    let list = this.state.list
    list[i].isChecked = e.target.checked
    this.setState({
      list
    })

    // 复选
    let checkedAll = this.state.list.every(item => item.isChecked)
    this.setState({
      checkedAll
    })
  }

  // 合计
  totalHandler() {
    return this.state.list.reduce((prev, item) => {
      return item.isChecked ? prev += item.count * item.price : prev
    }, 0)
  }

  // 全选
  selectAllHandler = (e) => {
    let list = this.state.list;
    list.forEach(item => item.isChecked = e.target.checked)
    this.setState({
      list
    })
    this.setState({
      checkedAll: e.target.checked
    })
  }

  //删除商品
  delHandler(i) {
    this.axios.get('/shoppingcart/delete', {
      params: {
        uname: sessionStorage['uname'],
        lid: this.state.list[i].lid
      }
    }).then(res => {
      this.setState({
        alert: true
      })
      setTimeout(() => {
        this.setState({
          alert: false
        })
        let list = this.state.list;
        list.splice(i, 1)
        this.setState({
          list
        })
      }, 1500);
    })
  }

  // 历史记录返回一次
  backHistoryHandler = () => this.props.history.goBack(-1)

  render() {
    return (
      <div className='shopcart'>
        <Topnav
          centerText={'购物车'}
          backHistoryHandler={this.backHistoryHandler}
        />
        {
          this.state.list.length > 0 ? (
            <ul>
              {
                this.state.list.map((item, i) => {
                  return (
                    <li key={i}>
                      <input
                        type='checkbox'
                        checked={item.isChecked}
                        onChange={(e) => this.isCheckedHandler(i, e)}
                      />
                      <img src={item.img} alt="" />
                      <div className='container'>
                        <div>
                          <p className='shopcart-title'>{item.detail}</p>
                          <span onClick={() => this.delHandler(i)}>删除商品</span>
                        </div>
                        <p className='shopcart-title shopcart-brand'>品牌：{item.brand}</p>
                        <p className='shopcart-size'>尺码：{item.size != null ? item.size : '无'}</p>
                        <div>
                          <span className='shopcart-price'>价格：￥{item.price}</span>
                          <Count
                            i={i}
                            count={item.count}
                            addHandler={this.addHandler}
                            subHandler={this.subHandler}
                          />
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          ) : (
              <Nothing />
            )
        }
        {
          this.state.list.length > 0 && (
            <div className='total'>
              <div className='left'>
                <input type="checkbox" checked={this.state.checkedAll} onChange={this.selectAllHandler} />
                <span>合计金额：</span>
                <span className='total'>￥{this.totalHandler()}</span>
              </div>
              <input className='btn' type="button" defaultValue='结算' />
            </div>
          )
        }
        <Tarbar />
        {
          this.state.alert && (
            <Alert
              icon={'iconfont icongou'}
              msg={'删除成功'}
            />
          )
        }
      </div>
    )
  }
}
