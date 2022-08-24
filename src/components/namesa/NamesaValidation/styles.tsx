import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  gap: 32px;
  
  @media(max-width: 1020px) {
    display: flex;
    flex-direction: column;
  }

  > * {
    max-width: 610px;

    &:first-child {
      justify-self: left;
    }
    
    &:nth-child(2) {
      justify-self: center;
    }
  }
`;
