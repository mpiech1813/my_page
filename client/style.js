import styled, { keyframes } from 'styled-components';

export const MainLink = styled.h1`
    text-decoration: none;
    font-size: 1.5rem;
    color: green;
    font-weight: bold;
`;
export const Nav = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    // width: 99%;
`;

export const changeAnimationDown = keyframes`
    from {height: 0px;}
    to {height: 61.2px;}
`;

export const NavScrolled = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    width: 99%;
    background: #001a00;
    animation: ${changeAnimationDown} 0.5s;
    font-size: 0.8rem;
`;

export const Title = styled.h1`
    color: white;
`;

export const Break = styled.div`
    height: 120px;
`;

export default {
    Nav,
    MainLink,
    Title,
};
