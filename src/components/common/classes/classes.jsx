import React, { Component } from 'react'
import './css/classes.scss'

export default class Classes extends Component {
  render() {
    const list = this.props.list
    return (
      <div className='classes'>
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
