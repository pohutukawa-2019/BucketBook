import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import CountryPage from './CountryPage'
import HomePage from './HomePage'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path='/country/:selectedCountry' component={CountryPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
