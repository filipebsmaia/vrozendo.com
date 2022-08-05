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
    max-width: 610px;
  }
`;

interface IContentProps {
  left?: number;
}

export const Content = styled.div<IContentProps>`
  /* position: sticky; */
`;

export const InsightsContainer = styled.div`
  > ul {
    list-style: none;
    color: #12121A;
    
    li {
      background: ${(props) => props.theme.colors.textPrimary};
      padding: 1rem;
      margin-top: 1rem;
    }
    
    strong {
      font-size: 3rem;
    }
  }
  
`;
