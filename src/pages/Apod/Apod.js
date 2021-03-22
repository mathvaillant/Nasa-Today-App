/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/svg/logo.svg'
import Arrow from '../../assets/svg/arrow.svg'
import Spinner from '../../components/Spinner/Spinner'
import Header from '../../components/Header/Header'
import './Apod.scss'
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
        <Header />
        {this.state.loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            <div className='apod__container container'>
              <Link className='apod__keep' to='/'>
                Keep Exploring the App <img src={Arrow} alt='arrow.svg' />
              </Link>
              <div className='row'>
                <div className='apod__row__title'>
                  <h1>{title}</h1>
                  <span className='apod__date'>{date}</span>
                </div>
                <div className='apod__row__desc d-flex flex-column flex-lg-row'>
                  <div className='apod__img mx-0 mx-lg-1'>
                    <img
                      className='img-fluid'
                      src={hdurl}
                      alt={`${title}.png`}
                    />
                  </div>
                  <div className='apod__paragraph'>
                    <p className='p-4 m-0'>{explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }
}

export default Apod
