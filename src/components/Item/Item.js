import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import ItemPage from '../../pages/ItemPage/ItemPage'
import './Item.scss'

export class Item extends Component {
  state = {
    links: this.props.links,
    href: this.props.href,
    data: this.props.data,
    id: this.props.data.nasa_id,
  }

  render() {
    const { links, href, data, id } = this.state
    return (
      <Link
        className='item'
        to={{ pathname: `/${id}`, state: { data: data, href: links.href } }}>
        <img className='item_img img-fluid' src={links.href} alt={links.rel} />
      </Link>
    )
  }
}

export default Item
