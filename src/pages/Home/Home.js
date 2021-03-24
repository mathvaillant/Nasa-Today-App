import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Spinner from '../../components/Spinner/Spinner'
import ShowcaseItems from '../../components/ShowcaseItems/ShowcaseItems'
import NotFound from '../../components/NotFound/NotFound'
export class Home extends Component {
  state = {
    data: {},
    loading: false,
    notFound: false,
    resultsFound: 0,
  }

  // Search for the results from the input
  searchResults = async (inputData) => {
    this.setState({ loading: true })

    const url = `https://images-api.nasa.gov/search?q=${inputData.text}&media_type=image&year_start=${inputData.from}&year_end=${inputData.to}`
    const res = await fetch(url)
    const resData = await res.json()
    const data = resData.collection.items
    data.length !== 0
      ? this.setState({
          data: data,
          loading: false,
          resultsFound: data.length,
          notFound: false,
        })
      : this.setState({
          data: data,
          notFound: true,
          loading: false,
        })
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const res = await fetch(
      `https://images-api.nasa.gov/search?q=&media_type=image`
    )
    const resData = await res.json()
    const data = resData.collection.items
    this.setState({ data: data, loading: false, resultsFound: data.length })
  }

  render() {
    const { loading, data, notFound, resultsFound } = this.state
    return (
      <>
        <Header />
        <Search
          resultsFound={resultsFound}
          searchResults={this.searchResults}
        />
        {loading ? (
          <Spinner />
        ) : notFound ? (
          <NotFound />
        ) : (
          <>
            <ShowcaseItems resultsFound={resultsFound} data={data} />
          </>
        )}
      </>
    )
  }
}

export default Home
