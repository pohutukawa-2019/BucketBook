import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Header from './Header'

import CountryPage from './CountryPage'
import Home from './Home'
import SignIn from './SignIn'
import SignUp from './SignUp'

class App extends React.Component {
  render() {
    return (
      <Router>
          <Route path='/' component={Header} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signIn' component={SignIn} />
          <Route path='/signUp' component={SignUp} />
          <Route path='/country/:selectedCountry' component={CountryPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
