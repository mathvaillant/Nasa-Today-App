import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import ShowcaseItems from '../../components/ShowcaseItems/ShowcaseItems'
export class Home extends Component {
  state = {
    data: {},
    loading: false,
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await fetch(
      'https://images-api.nasa.gov/search?q=earth&media_type=image'
    )
    const resData = await res.json()
    const data = resData.collection.items
    this.setState({ data: data, loading: false })
  }

  render() {
    const { loading, data } = this.state
    return (
      <>
        <Header />
        <Search />
        {loading ? <h1>Loading...</h1> : <ShowcaseItems data={data} />}
      </>
    )
  }
}

export default Home
