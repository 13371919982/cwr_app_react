import React, { Component } from 'react'
import './css/count.scss'

export default class Count extends Component {
  render() {
    const { i, count, subHandler, addHandler } = this.props
    return (
      <div className='count'>
        <input
          type="button"
          defaultValue='-'
          onClick={() => subHandler(count, i)}
        />
        <span>{count}</span>
        <input
          type="button"
          defaultValue='+'
          onClick={() => addHandler(count, i)}
        />
      </div>
    )
  }
}
