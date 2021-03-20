import React, { Component } from 'react'
import './ItemPage.scss'
import Spinner from '../../components/Spinner/Spinner'

export class ItemPage extends Component {
  state = {
    data: {},
    href: '',
    loading: true,
  }

  componentDidMount() {
    this.setState({
      data: this.props.location.state.data,
      href: this.props.location.href,
      loading: false,
    })
  }

  render() {
    const { data, loading, href } = this.state
    const { title, description, date_created } = data
    return (
      <div className='itemPage'>{loading ? <Spinner /> : <h1>{title}</h1>}</div>
    )
  }
}

export default ItemPage
