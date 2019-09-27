import React, { Component } from 'react'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { connect } from 'react-redux'
import {signIn, isAuthenticated} from 'authenticare/client'
// import {signIn} from 'authenticare'


// const isAuthenticated = () => true
// const signIn = () => {}


class SignIn extends Component {

  state = {
    setForm: {
      username: '',
      password: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
}
  handleClick = () => {
    signIn({
      username: this.state.setForm.username,
      password: this.state.setForm.password
    }, {
      baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }
  
  render(props) {

    return (
      <div>
        <h2>Sign in</h2>
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
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    form: {
      username: 'JAMES',
      password: 'sldfsdlk'
    }
  }
}


export default connect(mapStateToProps)(SignIn)