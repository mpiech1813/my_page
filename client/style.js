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

export const Break = styled.div`
    height: 120px;
`;

export const Br = styled.hr`
    width: 100%;
    color: #f8f8f8;
    background-color: #f8f8f8;
    height: 0.2rem;
`;

export const HomePage = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 1px red;
`;

export const ContentDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const PBlock = styled.p`
    display: inline;
`;

export default {
    Nav,
    MainLink,
    Title,
    MainContainer,
    Br,
    HomePage,
    ContentDiv,
    PBlock,
};
