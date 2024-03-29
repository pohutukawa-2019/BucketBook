import React from 'react'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { connect } from 'react-redux'
import { register, isAuthenticated } from 'authenticare/client'

import Header from './Header'
import Footer from './Footer'
import { fetchBackgroundImage } from '../api/fetchBackgroundImage'

class SignUp extends React.Component {
  state = {
    username: '',
    password: '',
    picture: 'https://images.unsplash.com/photo-1514167451507-c1b5dec6cfd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
    style: {
      backgroundImage: 'url(https://images.unsplash.com/photo-1553853532-e11325afc0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat'
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    register({
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

  handleEnter = (event) => {
    if (event.charCode === 13) {
      event.preventDefault()
      register({
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
  }

  gridStyle = {
    backgroundColor: 'rgba(30, 113, 128, 0.80)',
    position: 'relative',
    top: '8vh',
    left: '30vw',
    width: '35vw',
    color: 'white',
    borderRadius: '15px',
    height: '75vh'
  }

  render () {
    return (
      <div style={this.state.style}>
        <Header />
        <GridForm style={this.gridStyle}>
          <img src={this.state.picture} alt='Missing'
            style={{
              borderRadius: '50%',
              width: '14vw',
              height: '14vw',
              position: 'absolute',
              left: '10.5vw',
              top: '9vh',
              borderStyle: 'solid',
              borderWidth: '2px',
              borderColor: 'orange'
            }}></img>
          <ColTwo name='username'
            placeholder='Username'
            autoComplete="username"
            onChange={this.handleChange}
            style={{
              width: '30vw',
              height: '5vh',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderWidth: '0px', 
              color: 'white',
              borderBottomWidth: '1px',
              borderBottomColor: 'white',
              position: 'relative',
              left: '1.5vw',
              top: '40.5vh',
              fontSize: '17px'
            }}
          />

          <ColTwo name='password' type='password'
            autoComplete="new-password"
            placeholder='Password'
            onChange={this.handleChange}
            onKeyPress={this.handleEnter}
            style={{
              width: '30vw',
              height: '5vh',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderWidth: '0px', 
              color: 'white',
              borderBottomWidth: '1px',
              borderBottomColor: 'white',
              position: 'relative',
              left: '1.5vw',
              top: '25vh',
              fontSize: '17px'
            }}
          />

          {/* <ColTwo name='picture' type='picture'
            placeholder='Picture'
            onKeyDown={this.handleEnter}
            style={{
              width: '30vw',
              height: '5vh',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderWidth: '0px', 
              color: 'white',
              borderBottomWidth: '1px',
              borderBottomColor: 'white',
              position: 'relative',
              left: '1.5vw',
              top: '12vh',
              fontSize: '17px'
            }}
          /> */}

          <Button type='button' style={{
            width: '8vw',
            height: '4vh', 
            position: 'relative',
            top: '12vh',
            left: '2vw',
            backgroundColor: 'orange',
            borderRadius: '10px',
            fontFamily: 'Montserrat, sans-serif',
            borderStyle: 'none',
            color: 'white',
            cursor: 'pointer'
          }} onClick={this.handleClick}>SUBMIT</Button>
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

export default connect(mapStateToProps)(SignUp)
