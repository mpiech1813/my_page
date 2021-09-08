import styled, { keyframes } from 'styled-components';

export const MainContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const MainLink = styled.h1`
    text-decoration: none;
    font-size: 1.5rem;
    color: #04b800;
    font-weight: bold;
    margin-bottom: 0px;
`;
export const Nav = styled.div`
    flex: 0 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1rem 1rem;
    background-color: black;
`;

export const Title = styled.h1`
    // color: black;
`;

export const Break = styled.div`
    height: 120px;
`;

export const Br = styled.hr`
    width: 100%;
    color: #f8f8f8;
    background-color: #f8f8f8;
    height: 0.2rem;
`;

export const Home = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export default {
    Nav,
    MainLink,
    Title,
    MainContainer,
    Br,
};
