import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

export class Item extends Component {
  state = {
    links: this.props.links,
    href: this.props.href,
    data: this.props.data,
  }
  render() {
    const { links, href, data } = this.state
    return (
      <>
        <Link className='item' to='/'>
          <img
            className='item_img img-fluid'
            src={links.href}
            alt={links.rel}
          />
        </Link>
      </>
    )
  }
}

export default Item
