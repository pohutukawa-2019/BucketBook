import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Home from './Home'
import SignIn from './SignIn'

const App = () => (
  <Router>
    <div className='app'>
      <Route exact path='/' component={Home} />
      <Route exact path='/signIn' component={SignIn} />
    </div>
  </Router>
)

export default App
