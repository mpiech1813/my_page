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
`;
export const Nav = styled.div`
    flex: 0 0 100px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100%;
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
    MainContainer,
};
