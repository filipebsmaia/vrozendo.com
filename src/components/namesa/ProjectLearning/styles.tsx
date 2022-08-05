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
  }
`;

interface IContentProps {
  left?: number;
}

export const Content = styled.div<IContentProps>`
  /* position: sticky; */
`;

export const LearningContainer = styled.div`
  > ul {
    list-style: none;
    
    li {
      margin-top: 1rem;
    }
    
    span {
      font-size: 1rem;

      &.highlight {
        color: ${(props) => props.theme.colors.textPrimary};
        margin-right: 0.25rem;
      }
    }
  }
  
`;
