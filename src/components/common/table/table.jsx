import React, { Component } from 'react'
import './css/table.scss'

export default class Table extends Component {
  render() {
    return (
      <div className='table'>
        {
          this.props.list.length > 0 && this.props.list.map((item, i) => {
            return (
              <a href="/" key={i}>
                <i className={item.icon}></i>
                <span>{item.title}</span>
              </a>
            )
          })
        }
      </div>
    )
  }
}
