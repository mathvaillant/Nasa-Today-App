import React from 'react'
import { Link } from 'react-router-dom'
import './Item.scss'

const Item = ({ id, data, links }) => {
  return (
    <Link
      className='item'
      to={{
        pathname: `/${id}`,
        state: { data: data, href: links.href },
      }}>
      <img className='item_img img-fluid' src={links.href} alt={links.rel} />
    </Link>
  )
}

export default Item
