import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, MainLink } from '../../style';

class NavBar extends Component {
  render() {
    return (
      <Nav>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <MainLink>Home</MainLink>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none' }}>
          <MainLink>About Me</MainLink>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none' }}>
          <MainLink>Projects</MainLink>
        </Link>
        <Link to="/achievements" style={{ textDecoration: 'none' }}>
          <MainLink>Achievements</MainLink>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none' }}>
          <MainLink>Contact Me</MainLink>
        </Link>
      </Nav>
    );
  }
}

export default NavBar;
