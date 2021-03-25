import React, { useContext, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import Spinner from '../../components/Spinner/Spinner'
import ShowcaseItems from '../../components/ShowcaseItems/ShowcaseItems'
import NotFound from '../../components/NotFound/NotFound'
import NasaContext from '../../contextAPI/nasa/nasaContext'

const Home = () => {
  const nasaContext = useContext(NasaContext)

  const {
    data,
    resultsFound,
    lastSearch,
    loading,
    notFound,
    getNasaData,
    lastYPosition,
    setLastYPosition,
  } = nasaContext

  useEffect(() => {
    setTimeout(() => {
      if (lastYPosition !== 0) {
        window.scrollTo(0, lastYPosition)
      } else {
        window.scrollTo(0, 0)
      }
    }, 200)
  }, [lastYPosition])

  useEffect(() => {
    let url = ''
    if (lastSearch !== '') {
      url = `https://images-api.nasa.gov/search?q=${lastSearch}&media_type=image`
      getNasaData(url)
      getCurrentYPosition()
    } else {
      url = `https://images-api.nasa.gov/search?q=&media_type=image`
      getNasaData(url)
    }
  }, [])

  const getCurrentYPosition = () => {
    const currentY =
      document.documentElement.scrollTop || document.body.scrollTop
    setLastYPosition(currentY)
  }

  return (
    <div onClick={getCurrentYPosition}>
      <Header />
      <Search />
      {loading ? (
        <Spinner />
      ) : notFound ? (
        <NotFound />
      ) : (
        <ShowcaseItems data={data} resultsFound={resultsFound} />
      )}
    </div>
  )
}

export default Home
