import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import './Start.scss'

export class Start extends Component {
  render() {
    return (
      <div className='start'>
        <img src={Logo} alt='Nasa Logo.svg' />
        <h1>Nasa Now</h1>
        <Link to='/apod'>Start</Link>
      </div>
    )
  }
}

export default Start
