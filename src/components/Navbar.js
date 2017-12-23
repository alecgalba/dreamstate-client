import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Menu>
        <Menu.Item header>Welcome To DreamState</Menu.Item>
        <Menu.Item as={Link} to='/'>
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item as={Link} to='/dreams' name='Your Dreams'></Menu.Item>
        <Menu.Item as={Link} to='/dreams/new' name='Create New Dream'></Menu.Item>
        <Menu.Item as={Link} to='/about' name='About Page'></Menu.Item>
        <Menu.Item as={Link} to='/contact' name='Contact Page'>
          <Icon name='mail' />
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default Navbar;
