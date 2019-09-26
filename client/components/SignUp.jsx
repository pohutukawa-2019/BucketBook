import React from 'react'

const register = () => {}

class SignUp extends React.Component {
  
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  handleChange = e => {
    setForm({
      ...form,
      [e.target.value]: e.target.value
    })
  }

  handleClick = () => {
    register({
      username: form.username,
      password: form.password
    }, {
      baseUrl: process.env.BASE.API.URL

    })
  }
}