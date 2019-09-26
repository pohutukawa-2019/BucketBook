import React, { Component } from 'react'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { connect } from 'react-redux'

const isAuthenticated = () => true
const signIn = () => {}


class SignIn extends Component {

  render(props) {

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    signIn({
      username: state.form.username,
      password: state.form.password
    }, {
      baseUrl: process.env.BASE_API_URL // see .env and webpack.config.js
    })
      .then((token) => {
        if (isAuthenticated()) {
          props.history.push('/')
        }
      })
  }

    return (
      <div>
        <h2>Sign in</h2>
          <GridForm>
            <ColOne>Username:</ColOne>
            <ColTwo name='username'
              value={form.username}
              onChange={handleChange} />

            <ColOne>Password:</ColOne>
            <ColTwo name='password' type='password'
              value={form.password}
              onChange={handleChange} />

            <Button type='button' onClick={handleClick}>Sign in</Button>
          </GridForm>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    form: {
      username: '',
      password: ''
    }
  }
}


export default connect(mapStateToProps)(SignIn)