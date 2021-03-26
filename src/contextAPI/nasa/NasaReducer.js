/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable default-case */
import {
  SET_LOADING,
  GET_APOD,
  GET_DATA,
  NOT_FOUND,
  APP_STARTED,
  SEARCH_RESULTS,
  SET_LAST_Y_POSITION,
} from '../types'

export default (state, action) => {
  switch (action.type) {
    case GET_APOD:
      return {
        ...state,
        data: action.payload,
        loading: false,
      }
    case GET_DATA:
      return {
        ...state,
        data: action.payload.data,
        resultsFound: action.payload.resultsFound,
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case SEARCH_RESULTS:
      return {
        ...state,
        lastSearch: action.payload.lastSearch,
        data: action.payload.data,
        resultsFound: action.payload.resultsFound,
        loading: false,
      }
    case NOT_FOUND:
      return {
        ...state,
        resultsFound: 0,
        notFound: true,
        loading: false,
      }
    case APP_STARTED:
      return {
        ...state,
        appStarted: true,
      }
    case SET_LAST_Y_POSITION:
      return {
        ...state,
        lastYPosition: action.payload.lastYPosition,
      }
    default:
      return state
  }
}
