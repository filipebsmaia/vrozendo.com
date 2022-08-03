import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 32px;
  
  @media(max-width: 1280px) {
    flex-direction: column-reverse;
  }
`;

export const ThreeDimensionalAppView = styled.iframe`
  min-width: 500px;
  min-height: 620px;
  overflow: hidden;
  border: 0;  
  
  @media(max-width: 600px) {
    transform: scale(0.8);
    margin-top: -64px;
  }

  @media(max-width: 450px) {
    transform: scale(0.65);
    margin-top: -128px;
  }
`;

export const Content = styled.div`
  max-width: 610px;

  @media(max-width: 1280px) {
    width: 100%;
  }
`;
