import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Arrow from '../../assets/svg/arrow.svg'
import Header from '../../components/Header/Header'
import './Start.scss'

export class Start extends Component {
  render() {
    return (
      <div className='start'>
        <Header />
        <Link className='start__btn' to='/apod'>
          Start <img src={Arrow} alt='arrow.svg' />
        </Link>
      </div>
    )
  }
}

export default Start
