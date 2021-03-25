import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import './App.scss'

import ItemPage from './pages/ItemPage/ItemPage'
import Start from './pages/Start/Start'
import Apod from './pages/Apod/Apod'
import Home from './pages/Home/Home'

const App = () => {
  const [appStarted, setAppStarted] = useState(false)

  return (
    <Router>
      <div className='app__bg'></div>
      <div className='app'>
        {!appStarted ? (
          <>
            <Redirect to='/start' />
            <Route exact path='/start' component={Start} />
          </>
        ) : (
          ''
        )}
        <Switch>
          <Route exact path='/start' component={Start} />
          <Route exact path='/apod' component={Apod} />
          <Route exact path='/' component={Home} />
          <Route exact path='/:id' component={ItemPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
