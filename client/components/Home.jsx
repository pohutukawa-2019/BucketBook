import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  state = {
    style: {
      backgroundColor: '#cccccc',
      backgroundImage: 'linear-gradient(red, yellow)',
      height: '100vh',
      width: '100vw'
    }
  }

  handleSignInClick = () => {
    this.setState({
      style: {
        backgroundImage:  this.props.getBackgroundImage()
      }
    })
  }

  render () {
    return(
      <div style={this.state.style}>
        <h1>Welcome</h1>
        <h2>Start creating your travel bucket list today.</h2>
        <button type='button' onClick={this.handleSignInClick}>SIGN IN</button>
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
