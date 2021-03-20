/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import Arrow from '../../assets/svg/arrow.svg'
/* import PropTypes from 'prop-types' */

class Apod extends Component {
  state = {
    data: {},
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=bLYqZVI9VvvgoF0zW1O9hXEwC0vo4MhE2cvQCscu`
    )
    const data = await res.json()
    this.setState({ data: data, loading: false })
  }

  /* Using Promises */
  /* componentDidMount() {
    return new Promise(() => {
      fetch(apodUrl)
        .then((res) => res.json())
        .then((data) => this.setState({ data: data }))
        .catch((err) => console.log(err))
    })
  } */

  render() {
    const { title, date, explanation, hdurl } = this.state.data

    return (
      <div className='apod'>
        {this.state.loading ? (
          <>
            <h1>Loading...</h1>
          </>
        ) : (
          <>
            <img src={Logo} alt='nasa logo.svg' />
            <h1>Nasa Now</h1>
            <div className='apod__container'>
              <div className='apod__container__title'>
                <h1>{title}</h1>
                <span>{date}</span>
              </div>
              <img src={hdurl} alt={`${title}.png`} />
              <p>{explanation}</p>
            </div>
            <Link to='/'>
              Keep Exploring the App <img src={Arrow} alt='arrow.svg' />
            </Link>
          </>
        )}
      </div>
    )
  }
}

export default Apod
