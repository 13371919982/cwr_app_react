import React, { Component } from 'react'
import './css/table.scss'

export default class Table extends Component {
  render() {
    const list = this.props.list
    return (
      <div className='table'>
        {
          list.length > 0 && list.map((item,i)=>{
            return (
              <a href="/" key={ i }>
                <i className={ item.icon }></i>
                <span>{ item.title }</span>
              </a>
            )
          })
        }
      </div>
    )
  }
}
