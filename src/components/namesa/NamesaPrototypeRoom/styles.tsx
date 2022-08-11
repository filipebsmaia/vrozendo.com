import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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
      justify-self: flex-end;
    }

    > ul {
      margin-top: 1rem;
      margin-left: 1rem;
    }
  }
`;
