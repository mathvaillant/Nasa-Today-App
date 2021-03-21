import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Spinner from '../../components/Spinner/Spinner'
import ShowcaseItems from '../../components/ShowcaseItems/ShowcaseItems'
export class Home extends Component {
  state = {
    data: {},
    loading: false,
  }

  // Search for the results from the input
  searchResults = async (inputData) => {
    this.setState({ loading: true })

    const url = `https://images-api.nasa.gov/search?q=${inputData.text}&media_type=image&year_start=${inputData.from}&year_end=${inputData.to}`
    console.log(url)
    const res = await fetch(url)
    const resData = await res.json()
    console.log(resData)
    const data = resData.collection.items
    this.setState({ data: data, loading: false })
  }

  // When Dom loads for the first time
  async componentDidMount() {
    this.setState({ loading: true })

    const res = await fetch(
      'https://images-api.nasa.gov/search?q=&media_type=image'
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
        <Search searchResults={this.searchResults} />
        {loading ? <Spinner /> : <ShowcaseItems data={data} />}
      </>
    )
  }
}

export default Home
