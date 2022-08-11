import styled from 'styled-components';

export const Container = styled.div`  
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  gap: 64px;
  
  @media(max-width: 1280px) {
    display: flex;
    flex-direction: column;
  }

  > div {    
    display: flex;
    flex-direction: column;
    justify-content: center;

    min-width: 320px;
  }
`;

export const ImageContainer = styled.div`
  align-items: flex-end;
  
`;

export const AppChatContainer = styled.div`
  display: flex; 
  margin-top: 40px;
  align-items: center;
  
`;

export const AppImage = styled.div`
  min-width: 110px;  
`;

export const AdventureChat = styled.div`
  display: flex;

  margin: 16px 0 0 32px;
  margin-top: 16px;
  background-color: #E5AD2E;
  color: #161620;
  font-size: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  max-width: 650px;

  transition: height 0.5s ease-in-out;

  > div {
    min-width: 38px;  
    transform: translateY(4px);
    margin-left: -30px;
  }
`;
