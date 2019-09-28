import React, { Component } from 'react'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { connect } from 'react-redux'
import { signIn, isAuthenticated } from 'authenticare/client'

import Footer from './Footer'

class SignIn extends Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleClick = () => {
    signIn({
      username: this.state.username,
      password: this.state.password
    }, {
      baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
    })
      .then((token) => {
        if (isAuthenticated()) {
          this.props.history.push('/')
        }
      })
  }

  render () {
    return (
      <div>
        <h2>Sign In</h2>
        <GridForm>
          <ColOne>Username:</ColOne>
          <ColTwo name='username'
            // value={this.state.setForm.username}
            placeholder='Username'
            onChange={this.handleChange} />

          <ColOne>Password:</ColOne>
          <ColTwo name='password' type='password'
            // value={this.state.setForm.password}
            placeholder='Password'
            onChange={this.handleChange} />

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
