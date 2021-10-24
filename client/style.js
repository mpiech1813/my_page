import styled from 'styled-components';

const MainContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
`;

const MainLink = styled.h1`
    text-decoration: none;
    font-size: 1.5rem;
    color: #04b800;
    font-weight: bold;
    margin-bottom: 0px;
`;
const Nav = styled.div`
    flex: 0 0 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem 1rem 1rem;
    background-color: black;
    height: 96.7vh;
`;

const Title = styled.h1`
    // color: black;
`;

const Break = styled.hr`
    margin: 5rem 0px 5rem 0px;
    height: 2px;
`;

const Br = styled.hr`
    width: 100%;
    color: #f8f8f8;
    background-color: #f8f8f8;
    height: 0.2rem;
`;

const HomePage = styled.div`
    padding: 0px 0px 0px 1rem;
    display: flex;
    flex-direction: column;
`;

const ContentDiv = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const PBlock = styled.p`
    display: inline;
`;

const SpaceDiv = styled.div`
    width: 2rem;
`;

const StyCom = {
    Nav,
    MainLink,
    Title,
    MainContainer,
    Br,
    HomePage,
    ContentDiv,
    PBlock,
    SpaceDiv,
};

export default StyCom;
