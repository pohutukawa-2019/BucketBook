import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

class Header extends Component {
  render() {

    return (
      <div style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
        <Menu pointing secondary style={{borderBottom: '0px', border: 'none', fontSize: '15px'}}>
          <Menu.Menu position='left'>
            <Link to='/'><Menu.Item
            style={{ width: '5vw' }}
            /><img src={'/images/bb_logo_lscape_white.svg'} style={{position: 'relative', left: '2vw'}}></img></Link>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <IfAuthenticated>
              <Link to='/'><Menu.Item
                name='SIGN OUT'
                onClick={logOff}
                style={{color: 'white', borderStyle: 'solid', borderColor: 'orange', borderRadius: '5px', position: 'relative', right: '2vw', top: '2vh', borderWidth: '3px', fontWeight: '900'}}
              /></Link>
            </IfAuthenticated>
            <IfNotAuthenticated>
            <Link to='/register'><Menu.Item
            name='sign up'
            style={{color: 'white', borderStyle: 'solid', borderColor: 'white', borderRadius: '5px', position: 'relative', right: '2vw', top: '2vh', borderWidth: '3px', fontWeight: '900'}}
            /></Link>
            </IfNotAuthenticated>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default Header