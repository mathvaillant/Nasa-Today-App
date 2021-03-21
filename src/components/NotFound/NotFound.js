import React, { Component } from 'react'
import Gif from '../../assets/images/notFound4.gif'
import './NotFound.scss'

export class NotFound extends Component {
  render() {
    return (
      <div className='notFound'>
        <h1>
          ERROR: 404 <br /> Page not Found
        </h1>
        <img className='img-fluid' src={Gif} alt='gif.svg' />
        <small>Are they observing us...?</small>
      </div>
    )
  }
}

export default NotFound
