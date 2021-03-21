import React, { Component } from 'react'
import './ItemPage.scss'
import Spinner from '../../components/Spinner/Spinner'
import Header from '../../components/Header/Header'
import { Link } from 'react-router-dom'
import Icon from '../../assets/svg/icon.svg'
import Arrow from '../../assets/svg/arrow.svg'
import NotFound from '../../components/NotFound/NotFound'

export class ItemPage extends Component {
  state = {
    data: {},
    href: '',
    loading: true,
  }

  componentDidMount() {
    this.setState({
      data: this.props.location.state.data,
      href: this.props.location.state.href,
      loading: false,
    })
  }

  render() {
    const { data, loading, href, notFound } = this.state
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
                <div className='row'>
                  <h1>
                    {title} <span>{date_created}</span>{' '}
                  </h1>
                  <img className='itemPage__image' src={href} alt={`${href}`} />
                  <div className='itemPage__content'>
                    <a className='download' href={`${href}`} download>
                      Download{' '}
                      <img
                        style={{ marginLeft: '5px' }}
                        width='18px'
                        src={Icon}
                        alt='icon.svg'
                      />
                    </a>
                    <p>{description}</p>
                    <Link className='back' to='/'>
                      <img src={Arrow} alt='arrow.svg' />
                      Back
                    </Link>
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
