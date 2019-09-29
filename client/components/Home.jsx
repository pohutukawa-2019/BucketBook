import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'

import Map from './Map'
import Footer from './Footer'
import Searchbar from './Searchbar'
import Header from './Header'

import { fetchBackgroundImage } from '../api/fetchBackgroundImage'

class Home extends React.Component {
  state = {
    style: {
      backgroundImage: '',
      backgroundSize: '100%, 100%',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
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
          backgroundImage: 'url(https://images.unsplash.com/photo-1544945582-052b29cd29e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1488&q=80)'
      }})
    }
  }

  handleClick = () => {

  }

  render () {
    return(
      
        <div style={this.state.style}>
          <Header />
          <IfNotAuthenticated>
            <h1 style={{color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '100px', fontWeight: '300', position: 'relative', top: '20vh', left: '35vw'}}>Welcome</h1>
            <h2 style={{color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '100', position: 'relative', top: '16vh', left: '37vw'}}>Start creating your travel bucket list today</h2>
            <Link to='/signIn'><button className='ui button' onClick={this.handleClick} style={{ fontFamily: 'Montserrat, sans-serif;', fontSize: '20px', backgroundColor: 'orange', color: 'white', fontWeight: '100', width: '13vw', height: '7vh', position: 'relative', top: '18vh', left: '44vw' }}>SIGN IN</button></Link>
          </IfNotAuthenticated>
          <IfAuthenticated>
            <div style={{width: '90vw', height: '85vh', backgroundColor: 'rgba(30, 113, 128, 0.80)', borderRadius: '15px 15px 0px 0px', position: 'relative', left: '5vw', top: '8vh'}}>
              <Searchbar />
              <Map />
            </div>
          </IfAuthenticated>
          <Footer />
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
