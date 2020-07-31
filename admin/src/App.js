import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Dashboard from './Dashboard'
import Login from './Login'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/'>
          <Dashboard />
        </Route>
        <Route>
          <Redirect to='' />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
