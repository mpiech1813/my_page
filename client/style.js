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
    0% {
        height: 0px;
    }
    // 25%{
    //     height: 20px;
    //     opacity : 0.2;
    // }
    // 50% {
    //     height: 40px;
    //     opacity : 0.4;
    // }
    // 75% {
    //     height: 60px;
    //     opacity : 0.6;
    // }
    100% {
        height: 60px;
        opacity : 1;
    }
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
