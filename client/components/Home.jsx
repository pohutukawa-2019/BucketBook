import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import SignIn from './SignIn'

class Home extends React.Component {
  state = {
    style: {
      backgroundImage: '',
      height: '100vh',
      width: '100vw'
    }
  }

  componentDidMount () {
    this.setState({
      style: {
        // backgroundImage:  this.props.getBackgroundImage()
        backgroundImage: 'linear-gradient(red, yellow)',
        height: '100vh',
        width: '100vw'
      }
    })
  }

  render () {
    return(
      <div style={this.state.style}>
        <h1>Welcome</h1>
        <h2>Start creating your travel bucket list today.</h2>
        <Link to='/signIn'><button className='ui button'>SIGN IN</button></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    backgroundImage: state.backgroundImage,
    isAuthenticated: state.isAuthenticated
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getBackgroundImage: () => dispatch(getBackgroundImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
