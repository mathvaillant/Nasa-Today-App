import React, { Component, useState } from 'react'
import Icon from '../../assets/images/search.png'

import './Search.scss'

const Search = (props) => {
  const [text, setText] = useState('')
  const [from, setFrom] = useState('1999')
  const [to, setTo] = useState('2021')

  const onChangeText = (e) => {
    const inputValue = e.target.value
    setText(inputValue)
    e.preventDefault()
  }

  const onChangeDate = (e) => {
    setFrom(e.target.value)
    setTo(e.target.value)
    e.preventDefault()
  }

  const searchInput = (e) => {
    props.searchResults({ text, from, to })
    e.preventDefault()
  }

  return (
    <div className='search'>
      <form>
        <input
          name='input'
          type='text'
          id='search__text'
          onChange={onChangeText}
        />
        <button onClick={searchInput}>
          <img src={Icon} alt='icon.png' />
        </button>
      </form>

      <div className='search__date d-none d-lg-flex   '>
        <label htmlFor='from'>From:</label>
        <input
          onChange={onChangeDate}
          step='1'
          type='number'
          id='from'
          name='from'
          value={from}
          min='1900'
          max='2099'></input>
        <label htmlFor='to'>To:</label>
        <input
          onChange={onChangeDate}
          step='1'
          type='number'
          id='to'
          name='to'
          value={to}
          min='1900'
          max='2099'></input>
      </div>
    </div>
  )
}

export default Search
