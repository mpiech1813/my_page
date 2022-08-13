import React, {  useRef } from 'react';
import { Link } from 'react-router-dom';
import { Nav, MainLink, Br } from '../../style.js';

const NavBar = () => {
    const ref = useRef();

    return (
        
        <Nav>
            <img src='/public/assets/logo2.png' width='130px' alt='Logo' />
            <Link to='home' style={{ textDecoration: 'none' }}>
                <MainLink>Contact Me</MainLink>
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
                <Link to='contact' style={{ textDecoration: 'none' }}>
                <MainLink>Work Experience</MainLink>
                <Br />
                </Link>
                <Link to='achievements' style={{ textDecoration: 'none' }}>
                <MainLink>Education</MainLink>
                <Br />
            </Link>
        </Nav>
        
    );
};

export default NavBar;
