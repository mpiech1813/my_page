import styled, { keyframes } from 'styled-components';

export const MainLink = styled.h1`
    text-decoration: none;
    font-size: 1.5rem;
    color: green;
    font-weight: bold;
`;
export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    border-radius: 15px;
    width: 99%;
`;

export const changeAnimation = keyframes`
    from {height: 0px;}
    to {height: 60px;}
`;

export const NavScrolled = styled.div`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid red;
    border-radius: 15px;
    width: 100%;
    background: #001a00;
    animation: ${changeAnimation} 0.5s;
    font-size: 1rem;
`;

export const Title = styled.h1`
    color: white;
`;

export default {
    Nav,
    MainLink,
    Title,
};
