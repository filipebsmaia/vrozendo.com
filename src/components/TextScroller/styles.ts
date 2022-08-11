import styled from 'styled-components';

interface ITextScrollerProps {
  size: number;
  borderSize: number;
}

export const ScrolableText = styled.div<ITextScrollerProps>`
  position: relative;
  display: inline-block;
  overflow: hidden;
  line-height: 1.6em;
  height: 1.6em;
  top: 0.45em;
  width: 18rem;
  font-size: 3rem;

  @media(max-width: 580px) {
    margin-top: -.45em;
  }

  > span {
    transition: top 0.75s;
    position: relative;
    top: 0;
    font-weight: bold;
  } 
  
  &::after {
    content: 'a';
    position: absolute;
    transition: width 0.5s;
    bottom: 0px;
    left: 0;
    right: 0;
    
    height: 0.08em;
    border-radius: 0.04em;  
    width: ${(props) => props.borderSize}px;
    background-color: ${(props) => props.theme.colors.textPrimary};
  }
  
`;
