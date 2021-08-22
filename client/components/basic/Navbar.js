import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavScrolled, MainLink } from '../../style';

const NavBar = () => {
    // const [scrolled, setScrolled] = useState(false);

    // const handleScroll = () => {
    //     const offset = window.scrollY;
    //     if (offset > 100) {
    //         setScrolled(true);
    //     } else {
    //         setScrolled(false);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    // });

    // let NavName = Nav;
    // scrolled ? (NavName = NavScrolled) : (NavName = Nav);

    return (
        <Nav>
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
