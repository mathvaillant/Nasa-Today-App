import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Spinner from '../../components/Spinner/Spinner'
import ShowcaseItems from '../../components/ShowcaseItems/ShowcaseItems'
import NotFound from '../../components/NotFound/NotFound'

const Home = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [resultsFound, setResultsFound] = useState(0)

  // Search for the results from the input
  const searchResults = async (inputData) => {
    setLoading(true)

    const url = `https://images-api.nasa.gov/search?q=${inputData.text}&media_type=image&year_start=${inputData.from}&year_end=${inputData.to}`
    const res = await fetch(url)
    const resData = await res.json()
    const data = resData.collection.items
    if (data.length !== 0) {
      setData(data)
      setResultsFound(data.length)
      setNotFound(false)
      setLoading(false)
    } else {
      setNotFound(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const res = await fetch(
        `https://images-api.nasa.gov/search?q=&media_type=image`
      )
      const resData = await res.json()
      const data = resData.collection.items
      setData(data)
      setResultsFound(data.length)
      setNotFound(false)
      setLoading(false)
    }

    fetchData()
  }, [resultsFound])

  return (
    <>
      <Header />
      <Search searchResults={searchResults} />
      {loading ? (
        <Spinner />
      ) : notFound ? (
        <NotFound />
      ) : (
        <ShowcaseItems resultsFound={resultsFound} data={data} />
      )}
    </>
  )
}

export default Home
