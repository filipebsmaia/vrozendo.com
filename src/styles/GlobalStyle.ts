import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth; 
    font-family: 'Quicksand', sans-serif;
    scroll-margin-top: 160px;
  }
  html {
    
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
    font-size: 16px;
    color: ${(props) => props.theme.colors.textPrimary};
    background-color: ${(props) => props.theme.colors.backgroundPrimary};


    @media (max-width: 1280px) {
      font-size: 15px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  #__next {    
    display: flex;
    flex-direction: column;
    /* flex: 1; */
  }

  button {
    cursor: pointer;
  }

  

`;
