import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { fetchBackgroundImage } from '../api/fetchBackgroundImage'

class Home extends React.Component {
  state = {
    style: {
      backgroundImage: '',
      backgroundSize: '100%, 100%',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw'
    }
  }

  randomPhoto = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }


  componentDidMount () {
    const random = this.randomPhoto(1, 10)
    fetchBackgroundImage()
      .then(res => {
        this.setState({style: {
          backgroundSize: '100%, 100%',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${res.body.results[random].urls.full})`
        }})
      })
  }

  handleClick = () => {

  }

  render () {
    return(
      <div style={this.state.style}>
        <h1>Welcome</h1>
        <h2>Start creating your travel bucket list today.</h2>
        <Link to='/signIn'><button className='ui button' onClick={this.handleClick}>SIGN IN</button></Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    // backgroundImage: state.backgroundImage,
    isAuthenticated: state.isAuthenticated
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getBackgroundImage: () => dispatch(getBackgroundImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
