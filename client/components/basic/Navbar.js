import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, MainLink } from '../../style';
// import logo from './logo.png';

const NavBar = () => {
    return (
        <Nav>
            <img src='/public/assets/logo.png' width='130px' alt='Logo' />
            <Link to='home' style={{ textDecoration: 'none' }}>
                <MainLink>Home</MainLink>
            </Link>
            <Link to='about' style={{ textDecoration: 'none' }}>
                <MainLink>About Me</MainLink>
            </Link>
            <Link to='projects' style={{ textDecoration: 'none' }}>
                <MainLink>Projects</MainLink>
            </Link>
            <Link to='achievements' style={{ textDecoration: 'none' }}>
                <MainLink>Achievements</MainLink>
            </Link>
            <Link to='contact' style={{ textDecoration: 'none' }}>
                <MainLink>Contact Me</MainLink>
            </Link>
        </Nav>
    );
};

export default NavBar;
