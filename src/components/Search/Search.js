import React, { Component } from 'react'
import Icon from '../../assets/images/search.png'

import './Search.scss'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lastSearch: this.props.lastSearch,
      text: '',
      from: '2000',
      to: '2021',
    }
  }

  onChangeText = (e) => {
    const inputValue = e.target.value
    this.setState({ text: inputValue })
    e.preventDefault()
  }

  onChangeDate = (e) => {
    this.setState({ [e.target.name]: e.target.value })
    e.preventDefault()
  }

  searchInput = (e) => {
    this.props.searchResults(this.state)
    e.preventDefault()
  }

  render() {
    return (
      <div className='search'>
        <form>
          <input
            name='input'
            type='text'
            id='search__text'
            onChange={this.onChangeText}
          />
          <button onClick={this.searchInput}>
            <img src={Icon} alt='icon.png' />
          </button>
        </form>

        <div className='search__date d-none d-lg-flex   '>
          <label htmlFor='from'>From:</label>
          <input
            onChange={this.onChangeDate}
            step='1'
            type='number'
            id='from'
            name='from'
            value={this.state.from}
            min='1900'
            max='2099'></input>
          <label htmlFor='to'>To:</label>
          <input
            onChange={this.onChangeDate}
            step='1'
            type='number'
            id='to'
            name='to'
            value={this.state.to}
            min='1900'
            max='2099'></input>
        </div>
      </div>
    )
  }
}

export default Search
