import React, { useReducer } from 'react'
import NasaContext from './nasaContext'
import NasaReducer from './NasaReducer'

import {
  GET_DATA,
  GET_APOD,
  SET_LOADING,
  NOT_FOUND,
  APP_STARTED,
  SEARCH_RESULTS,
  SET_LAST_Y_POSITION,
} from '../types'

const NasaState = (props) => {
  const initialState = {
    data: {},
    loading: false,
    notFound: false,
    resultsFound: 0,
    lastSearch: '',
    lastYPosition: 0,
    appStarted: false,
  }

  const [state, dispatch] = useReducer(NasaReducer, initialState)

  // Get ApodData
  const getApodData = async () => {
    setLoading()
    const res = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=bLYqZVI9VvvgoF0zW1O9hXEwC0vo4MhE2cvQCscu'
    )
    const data = await res.json()

    dispatch({
      type: GET_APOD,
      payload: data,
    })
  }

  // Get Data
  const getNasaData = async (url) => {
    setLoading()

    const res = await fetch(url)
    const resData = await res.json()
    const data = resData.collection.items

    dispatch({
      type: GET_DATA,
      payload: { data: data, resultsFound: data.length },
    })
  }

  // Search Results
  const searchResults = async (inputData) => {
    setLoading()

    const url = `https://images-api.nasa.gov/search?q=${inputData.text}&media_type=image&year_start=${inputData.from}&year_end=${inputData.to}`
    const res = await fetch(url)
    const resData = await res.json()
    const data = resData.collection.items
    console.log(data.length)
    if (data.length !== 0) {
      dispatch({
        type: SEARCH_RESULTS,
        payload: {
          data: data,
          resultsFound: data.length,
          lastSearch: inputData.text,
        },
      })
    } else {
      setNotFound()
    }
  }

  // Set LastYposition
  const setLastYPosition = (number) =>
    dispatch({ type: SET_LAST_Y_POSITION, payload: { lastYPosition: number } })

  // Set App started
  const setAppStarted = () => dispatch({ type: APP_STARTED })
  // Set not Found
  const setNotFound = () => dispatch({ type: NOT_FOUND })
  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING })

  return (
    <NasaContext.Provider
      value={{
        data: state.data,
        loading: state.loading,
        notFound: state.false,
        resultsFound: state.resultsFound,
        lastSearch: state.lastSearch,
        lastYPosition: state.lastYPosition,
        appStarted: state.appStarted,
        getApodData,
        setLoading,
        getNasaData,
        setAppStarted,
        searchResults,
        setLastYPosition,
        setNotFound,
      }}>
      {props.children}
    </NasaContext.Provider>
  )
}

export default NasaState
