import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 32px;
  
  @media(max-width: 1280px) {
    flex-direction: column;
  }
`;

interface IContentProps {
  left?: number;
}

export const Content = styled.div<IContentProps>`
  position: sticky;
  top: 45%;
  /* bottom: 500px; */
  margin-bottom: 256px;
  max-width: 610px;
  
  .highlight {
    color: ${(props) => props.theme.colors.textPrimary};
  }
  
  transition: all 0.25s ease-out;
  transform: translateX(-200%);

  /* transform: ${(props) => `translateX(${props.left}%)`}; */
  

  @media(max-width: 1280px) {
    position: static;
    width: 100%;
    transform: translateX(0);
  }
`;

export const RPGSessionsImageContainer = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  
  
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
  
`;
export const RPGSessionsImage = styled.div`
  margin-bottom: 1rem;
  height: 1200px;
  width: 420px;
  background: url("/assets/namesa/rpg_sessions_vertical.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  
  
  @media(max-width: 1280px) {
    height: 300px;
    width: 1810px;
    background: url("/assets/namesa/rpg_sessions_horizontal.png");   
    background-repeat: no-repeat; 
    background-position: center;
    background-size: contain;
    
    @media(max-width: 600px) {
      height: 200px;
      width: 1202px;
    }

    @media(max-width: 400px) {
      height: 160px;
      width: 964px;
    }
  }

  
`;

