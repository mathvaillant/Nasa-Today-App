import React, { Component } from 'react'
import Icon from '../../assets/images/search.png'

import './Search.scss'

export class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      from: '',
      to: '',
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
    console.log('Searching for...' + this.state.text)
    e.preventDefault()
  }

  render() {
    console.log(this.state)
    return (
      <div className='search'>
        <form>
          <input type='text' id='search__text' onChange={this.onChangeText} />
          <button onClick={this.searchInput}>
            <img src={Icon} alt='icon.png' />
          </button>
        </form>

        <div className='search__date d-none d-lg-flex   '>
          <label htmlFor='from'>From:</label>
          <input
            onChange={this.onChangeDate}
            type='date'
            id='from'
            name='from'
            value={this.state.from}
            min='2000-01-01'
            max=''></input>
          <label htmlFor='to'>To:</label>
          <input
            onChange={this.onChangeDate}
            type='date'
            id='to'
            name='to'
            value={this.state.to}
            min='2000-01-01'
            max=''></input>
        </div>
      </div>
    )
  }
}

export default Search
