import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import Map from './Map'
import Footer from './Footer'
import Searchbar from './Searchbar'

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
    if (this.state.style.backgroundImage === "") {
      this.setState({style: {
        backgroundSize: '100%, 100%',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          backgroundImage: 'url(https://images.unsplash.com/photo-1547341220-3c11fb2e363f?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjkzNDQ2fQ)'
      }})
    }
  }

  handleClick = () => {

  }

  render () {
    return(
      
        <div style={this.state.style}>
          <IfNotAuthenticated>
            <h1>Welcome</h1>
            <h2>Start creating your travel bucket list today.</h2>
            <Link to='/signIn'><button className='ui button' onClick={this.handleClick}>SIGN IN</button></Link>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <div style={{width: '90vw', height: '85vh', backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius: '15px 15px 0px 0px', position: 'relative', left: '5vw', top: '8vh'}}>
              {/* <Searchbar />*/}
              <Map />
            </div>
            <Footer />
          </IfAuthenticated>
        </div>
      
    )
  }
}

function mapStateToProps (state) {
  return {
    
  }
}

function mapDispatchToProps (dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
