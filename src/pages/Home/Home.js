import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import ShowcaseItems from '../../components/ShowcaseItems/ShowcaseItems'

export class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Search />
        <ShowcaseItems />
      </>
    )
  }
}

export default Home
