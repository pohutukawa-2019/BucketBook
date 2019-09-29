import React, { Component } from 'react'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { connect } from 'react-redux'
import { signIn, isAuthenticated } from 'authenticare/client'

import Header from './Header'
import Footer from './Footer'

import { fetchBackgroundImage } from '../api/fetchBackgroundImage'

class SignIn extends Component {
  state = {
    username: '',
    password: '',
    style: {
      backgroundImage: ''
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
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    signIn({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.history.push('/')
        }
      })
  }

  gridStyle = {
    backgroundColor: 'rgba(30, 113, 128, 0.80)',
    position: 'relative',
    left: '30vw',
    width: '40vw',
    color: 'white',
    borderRadius: '15px',
    height: '70vh'
  }

  render () {
    return (
      <div style={this.state.style}>
        <Header />
        <h2 style={{color: 'white'}}>Sign In</h2>
        <GridForm style={this.gridStyle}>
          <ColTwo name='username'
            placeholder='Username'
            onChange={this.handleChange}
            style={{
              width: '35vw',
              height: '5vh',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderWidth: '0px', 
              color: 'white',
              borderBottomWidth: '1px',
              borderBottomColor: 'white'
            }}
            />

          <ColTwo name='password' type='password'
            placeholder='Password'
            onChange={this.handleChange}
            style={{
              width: '35vw',
              height: '5vh',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderWidth: '0px', 
              color: 'white',
              borderBottomWidth: '1px',
              borderBottomColor: 'white'
            }}
            />

          <Button type='button' onClick={this.handleClick}>Sign in</Button>
        </GridForm>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    form: {
      username: 'JAMES',
      password: 'sldfsdlk'
    }
  }
}

export default connect(mapStateToProps)(SignIn)
