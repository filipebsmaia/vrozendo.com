import styled from 'styled-components';

import Image from '@components/Image';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  width: 100%;
  gap: 32px;
  margin-bottom: 128px;
  
  @media(max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }

  > * {
    max-width: 610px;
    width: 100%;
    
    &:first-child {
      position: sticky;
      top: 45%;
      margin-bottom: 256px;
    }

    &:nth-child(2) {
      justify-self: flex-end;
    }
  }
`;

export const PersonasImage = styled(Image)`
  width: 100%;
  & + * {
    margin-top: 128px;
  }

  img {
    width: 100%;
  }
`;
