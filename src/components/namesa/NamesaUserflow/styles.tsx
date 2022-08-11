import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 100%;
  
  @media(max-width: 1020px) {
    display: flex;
    flex-direction: column;
  }

  > * {
    max-width: 610px;

    &:nth-child(2) {
      align-self: center;
      margin-top: 128px;
      max-width: 100%;

    }
  }
`;
