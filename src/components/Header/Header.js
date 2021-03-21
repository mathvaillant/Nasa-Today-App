import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import './Header.scss'

export class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Link to='/'>
          <img src={Logo} alt='logo.svg' />
        </Link>
        <h1>Nasa Now</h1>
      </div>
    )
  }
}

export default Header
