import React, { Component } from 'react'
import './Item.scss'

export class Item extends Component {
  render() {
    return (
      <>
        <img
          className='item'
          src={this.props.links.href}
          alt={this.props.links.rel}
        />
      </>
    )
  }
}

export default Item
