import React from 'react'
import DelayLink from 'react-delay-link'
import Header from '../../components/Header/Header'
import './Start.scss'

const Start = () => {
  function animateBtn() {
    const link = document.querySelector('[role="link"]')
    link.classList = 'animate__animated animate__bounceOutRight'
  }

  return (
    <div className='start'>
      <Header />
      <span style={{ marginBottom: '25vh' }}></span>
      <DelayLink
        delay={500}
        to='/apod'
        clickAction={animateBtn}
        replace={false}
        className='start__btn'>
        <span className='start__btn__span'>Start 🚀</span>
      </DelayLink>
    </div>
  )
}

export default Start
