import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CountryPage from './CountryPage'
import HomePage from './HomePage'
import Home from './Home'
import SignIn from './SignIn'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route exact path='/signIn' component={SignIn} />
          <Route path='/country/:selectedCountry' component={CountryPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
