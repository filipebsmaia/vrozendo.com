import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 100%;
  gap: 32px;
  
  @media(max-width: 1020px) {
    display: flex;
    flex-direction: column;
  }

  > * {
    max-width: 630px;

    &:first-child {
      justify-self: left;
    }
  }
`;
