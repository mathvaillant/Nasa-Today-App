import React, { Component } from 'react'
import Icon from '../../assets/images/search.png'

import './Search.scss'

export class Search extends Component {
  render() {
    return (
      <div className='search'>
        <form>
          <input type='text' id='text' />
          <button>
            <img src={Icon} alt='icon.png' />
          </button>
        </form>
      </div>
    )
  }
}

export default Search
