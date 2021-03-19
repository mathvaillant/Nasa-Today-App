/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import './App.scss'

import Start from './pages/Start/Start'
import Apod from './pages/Apod/Apod'
import Home from './pages/Home/Home'
export class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Switch>
            <Route exact path='/start'>
              <Start />
            </Route>
            <Route exact path='/apod'>
              <Apod />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
