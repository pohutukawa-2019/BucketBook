import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class Header extends Component {

state = { 
  activeItem: 'home' 
}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Menu position='right'>
            <Menu.Item
              name='login'
              active={activeItem === 'login'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
            name='sign up'
            active={activeItem === 'sign'}
            onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>

        {/* <Segment>
          <img src='/images/wireframe/media-paragraph.png' />
        </Segment> */}
      </div>
    )
  }
}

export default Header