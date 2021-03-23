import React, { Component } from 'react'
import './ItemPage.scss'
import Spinner from '../../components/Spinner/Spinner'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import Icon from '../../assets/svg/icon.svg'
import Arrow from '../../assets/svg/arrow.svg'

export class ItemPage extends Component {
  state = {
    data: {},
    href: '',
    loading: true,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: this.props.location.state.data,
        href: this.props.location.state.href,
        loading: false,
      })
    }, 200)
  }

  render() {
    const { data, loading, href } = this.state
    const { title, description, date_created } = data
    return (
      <>
        <div className='itemPage'>
          {loading ? (
            <>
              <Header />
              <Spinner />
            </>
          ) : (
            <>
              <Header />
              <div className='container'>
                <Link className='back' to='/'>
                  <img src={Arrow} alt='arrow.svg' />
                  Back
                </Link>
                <div className='row'>
                  <h1>
                    {title} <span>{date_created}</span>{' '}
                  </h1>

                  <div className='itemPage__content d-flex flex-column flex-lg-row'>
                    <a className='download' href={`${href}`} download>
                      Download{' '}
                      <img
                        style={{ marginLeft: '5px' }}
                        width='18px'
                        src={Icon}
                        alt='icon.svg'
                      />
                    </a>
                    <div className='itemPage__content__image mx-0 mx-lg-1'>
                      <img className='img-fluid' src={href} alt={`${href}`} />
                    </div>
                    <div className='itemPage__content__text'>
                      <p className='p-4 m-0'>{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </>
    )
  }
}

export default ItemPage
