import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, MainLink, Br } from '../../style';

const NavBar = () => {
    return (
        <Nav>
            <img src='/public/assets/logo.png' width='130px' alt='Logo' />
            <Link to='home' style={{ textDecoration: 'none' }}>
                <MainLink>Home</MainLink>
                <Br />
            </Link>

            <Link to='about' style={{ textDecoration: 'none' }}>
                <MainLink>About Me</MainLink>
                <Br />
            </Link>
            <Link to='projects' style={{ textDecoration: 'none' }}>
                <MainLink>Projects</MainLink>
                <Br />
            </Link>
            <Link to='achievements' style={{ textDecoration: 'none' }}>
                <MainLink>Achievements</MainLink>
                <Br />
            </Link>
            <Link to='contact' style={{ textDecoration: 'none' }}>
                <MainLink>Contact Me</MainLink>
                <Br />
            </Link>
        </Nav>
    );
};

export default NavBar;
