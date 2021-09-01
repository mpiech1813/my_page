import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Nav, MainLink, Br } from '../../style';

const useOnScreen = (ref) => {
    const [isIntersectiong, setIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) =>
        setIntersecting(entry.isIntersecting)
    );

    useEffect(() => {
        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, []);
    return isIntersectiong;
};

const NavBar = () => {
    const ref = useRef();
    const isVisible = useOnScreen(ref);

    return (
        <Nav>
            <img src='/public/assets/logo.png' width='130px' alt='Logo' />
            <Link to='home' style={{ textDecoration: 'none' }}>
                <MainLink>Home</MainLink>
                {isVisible ? <Br /> : <h1>notvisible</h1>}
            </Link>

            <Link to='about' style={{ textDecoration: 'none' }}>
                <MainLink>About Me</MainLink>
                <Br ref={ref} />
            </Link>
            <Link to='projects' style={{ textDecoration: 'none' }}>
                <MainLink>Projects</MainLink>
                <Br ref={ref} />
            </Link>
            <Link to='achievements' style={{ textDecoration: 'none' }}>
                <MainLink>Achievements</MainLink>
                <Br ref={ref} />
            </Link>
            <Link to='contact' style={{ textDecoration: 'none' }}>
                <MainLink>Contact Me</MainLink>
                <Br ref={ref} />
            </Link>
        </Nav>
    );
};

export default NavBar;
