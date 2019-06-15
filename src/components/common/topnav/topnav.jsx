import React, { Component } from 'react'
import './css/topnav.scss'

export default class Topnav extends Component {
  render() {
    const { centerText, rightBtn, leftIcon, rightIcon, rightBtnHandler, backHistoryHandler } = this.props
    return (
      <div className='topnav'>
        <span onClick={ () => { backHistoryHandler() } }>
          {
            leftIcon ? <i className={ leftIcon }></i> : <i className={ 'iconfont iconnext-copy' }>返回</i> 
          }
        </span>
        <h4>{ centerText }</h4>
        <span onClick={ () => { rightBtnHandler() } }>
          <i className={ rightIcon }>{ rightBtn }</i> 
        </span>
      </div>
    )
  }
}
