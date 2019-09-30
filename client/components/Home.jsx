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
      backgroundImage: 'url(https://images.unsplash.com/photo-1545288204-7ed1f80acba3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjkzNDQ2fQ)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat'
    }
  }

  handleClick = () => {

  }

  render () {
    return(
      
        <div style={this.state.style}>
          <Header />
          <IfNotAuthenticated>
          <div style={{textAlign: 'center'}}>
            <h1 style={{color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '10rem', fontWeight: '300', position: 'relative', top: '23vh', display: 'inline-block', width: '100vw'}}>Welcome</h1>
            <h2 style={{color: 'white', fontFamily: 'Montserrat, sans-serif', fontSize: '20px', fontWeight: '100', position: 'relative', top: '18vh', display: 'inline-block', width: '100vw'}}>Start creating your travel bucket list today</h2>
            <Link to='/login'><button className='ui button' onClick={this.handleClick} style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1vw', backgroundColor: 'orange', color: 'white', fontWeight: '100', width: '13vw', height: '6vh', position: 'relative', top: '20vh', display: 'inline-block' }}>SIGN IN</button></Link>
            </div>          
          </IfNotAuthenticated>
          <IfAuthenticated>
            <div className='resultHeaderContainer'style={{width: '90vw', height: '85vh', backgroundColor: 'rgba(30, 113, 128, 0.80)', borderRadius: '15px 15px 0px 0px', position: 'relative', left: '5vw', top: '8vh'}}>
              <h1 className='respoResultHeader' style={{display: 'none'}}>Where would you like to go?</h1>
              <Searchbar />
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
