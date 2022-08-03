import styled from 'styled-components';

export const Container = styled.main`
  padding: 40px 100px;
  
  @media(max-width: 1280px) {
    padding: 20px 50px;
  }
  
  @media(max-width: 500px) {
    padding: 16px 40px;
  }
`;
