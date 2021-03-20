import React, { Component } from 'react'
import Logo from '../../assets/svg/logo.svg'
import './Header.scss'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <img src={Logo} alt='logo.svg' />
        <h1>Nasa Now</h1>
      </div>
    )
  }
}

export default Header
