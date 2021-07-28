import styled from 'styled-components';

export const MainLink = styled.h1`
  text-decoration: none;
  font-size: 1.5;
  color: green;
  font-weight: bold;
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;

  border-radius: 15px;
`;

export const Title = styled.h1`
  color: white;
`;

export default {
  Nav,
  MainLink,
  Title,
};
