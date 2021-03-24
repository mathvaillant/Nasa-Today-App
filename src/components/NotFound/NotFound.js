import React, { Component } from 'react'
import Gif from '../../assets/images/notFound4.gif'
import './NotFound.scss'

export class NotFound extends Component {
  render() {
    return (
      <div className='notFound d-flex flex-column'>
        <div className='notFound__text'>
          <h1>
            ERROR: 404 <br /> Page not Found
          </h1>
        </div>
        <div className='notFound__img'>
          <img className='img-fluid' src={Gif} alt='gif.svg' />
        </div>
        <div className='notFound__message'>
          <h1>Are they observing us...?</h1>
        </div>
      </div>
    )
  }
}

export default NotFound
