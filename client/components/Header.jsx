import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

class Header extends Component {
  render () {
    return (
      <div style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        <Menu pointing secondary style={{ borderBottom: '0px', border: 'none', fontSize: '15px' }}>
          <Menu.Menu position='left'>
            <Link to='/'><Menu.Item
              style={{ width: '3vw' }}
            /><img src={'/images/bb_logo_lscape_white.svg'} style={{ position: 'relative', left: '5vw', width: '150px', top: '2vh' }}></img></Link>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <IfAuthenticated>
              <Link to='/'><Menu.Item
                name='SIGN OUT'
                onClick={logOff}
                style={{ color: 'white', borderStyle: 'solid', borderColor: 'white', borderRadius: '6px', position: 'relative', right: '5vw', top: '5vh', borderWidth: '2px', fontWeight: '900', backgroundColor: '#FF9900' }}
              /></Link>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <Link to='/register'><Menu.Item
                name='sign up'
                style={{ color: 'white', borderStyle: 'solid', borderColor: 'white', borderRadius: '6px', position: 'relative', right: '5vw', top: '5vh', borderWidth: '3px', fontWeight: '900' }}
              /></Link>
            </IfNotAuthenticated>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Header
