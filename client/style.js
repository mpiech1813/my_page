import styled from 'styled-components';

export const MainContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
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
    height: 96.7vh;
`;

export const Title = styled.h1`
    // color: black;
`;

export const Break = styled.hr`
    margin: 5rem 0px 5rem 0px;
    height: 2px;
`;

export const Br = styled.hr`
    width: 100%;
    color: #f8f8f8;
    background-color: #f8f8f8;
    height: 0.2rem;
`;

export const HomePage = styled.div`
    padding: 0px 0px 0px 1rem;
    display: flex;
    flex-direction: column;
`;

export const ContentDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const PBlock = styled.p`
    display: inline;
`;

export const SpaceDiv = styled.div`
    width: 2rem;
`;

export const HypLink = styled.a`
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    color: blue;
`;

export const StyCom = {
    Nav,
    MainLink,
    Title,
    MainContainer,
    Br,
    HomePage,
    ContentDiv,
    PBlock,
    SpaceDiv,
    Break,
    HypLink,
};

export default StyCom;
