import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  width: 100%;
  gap: 32px;
  
  @media(max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  position: sticky;
  top: 45%;
  margin-bottom: 256px;
  max-width: 610px;
  
  .highlight {
    color: ${(props) => props.theme.colors.textPrimary};
  }
  

  @media(max-width: 1280px) {
    position: static;
    width: 100%;
    margin-bottom: 0;
  }
`;

export const RPGSessionsImageContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  max-width: 610px;
  width: 100%;
  margin-left: auto;
  
  @media(max-width: 1280px) {
    width: 100%;
  }

  &::-webkit-slider-thumb, &::-webkit-scrollbar-thumb {    
    background: ${(props) => props.theme.colors.textPrimary};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    height: 6px;
    background: none;
  }

  > div {
    margin-bottom: 1rem;
    
    &#mobile {
      display: none;    
    }

    @media(max-width: 1280px) {
      height: 300px;
      width: 1810px;
      

      &#desktop {
        display: none;      
      }

      &#mobile {
        display: block;      
      }
    }

  }  
`;
