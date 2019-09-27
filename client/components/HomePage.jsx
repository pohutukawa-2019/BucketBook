import React from 'react'

import Map from './Map'
import SignIn from './SignIn'
import SignUp from './SignUp'

class HomePage extends React.Component {
  render() {
    return (
      <div className='app'>
        <h1>BucketBook</h1>
        <Map />
        <SignIn />
        <SignUp />
      </div>
    )
  }
}

export default HomePage