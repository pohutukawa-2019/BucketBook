import React from 'react'
import Map from './Map'
import SignIn from './SignIn'
import SignUp from './SignUp'

const App = () => (
  <div className='app'>
    <h1>BucketBook</h1>
    <Map />
    <SignIn /> 
    <SignUp />
  </div>
)

export default App
