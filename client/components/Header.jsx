import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

class Header extends Component {

state = { 
  activeItem: 'home'
}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div style={{backgroundColor: 'rgba(75, 113, 210, 0.5)'}}>
        <Menu pointing secondary>
          <Menu.Menu position='left'>
            <Link to='/'><Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
            style={{color: 'white'}}
            /></Link>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <IfAuthenticated>
              <Link to='/'><Menu.Item
                name='sign out'
                active={activeItem === 'sign out'}
                onClick={logOff}
                style={{color: 'white'}}
              /></Link>
            </IfAuthenticated>
            <IfNotAuthenticated>
            <Link to='/SignUp'><Menu.Item
            name='sign up'
            active={activeItem === 'sign up'}
            onClick={this.handleItemClick}
            style={{color: 'white'}}
            /></Link>
            </IfNotAuthenticated>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Header