import React, { useReducer } from 'react'
import NasaContext from './nasaContext'
import NasaReducer from './NasaReducer'

import { GET_DATA, GET_APOD, SET_LOADING } from '../types'

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

  // Get Data

  // Get ApodData
  const getApodData = async () => {
    const res = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=bLYqZVI9VvvgoF0zW1O9hXEwC0vo4MhE2cvQCscu'
    )
    const data = await res.json()

    dispatch({
      type: GET_APOD,
      payload: data,
    })
  }

  // Get Last search
  // Set LastYposition
  // Set App started
  // Set not Found
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
      }}>
      {props.children}
    </NasaContext.Provider>
  )
}

export default NasaState
