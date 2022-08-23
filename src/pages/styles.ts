import styled from 'styled-components';

import BaseContainer from '@components/BaseContainer';
import BaseSection from '@components/BaseSection';
import { Link } from '@components/Link';

export const Container = styled(BaseContainer)`
  align-items: center;
`;

export const HomeSection = styled(BaseSection)`

  > h1 {
    display: inline-block;
    position: relative;
    font-size: 3rem;
    max-width: 500px;
  }
`;

export const AboutSection = styled(BaseSection)`
  width: 100%;

  border: 1px solid ${(props) => props.theme.colors.textPrimary};
  padding: 50px 0 0 0;
  margin-bottom: 50px;
`;

interface IAboutContentProps {
  row?: boolean;
}

export const AboutContent = styled.div<IAboutContentProps>`
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  
  @media(max-width: 1280px) {
    padding: 20px 36px;
  }
  
  @media(max-width: 500px) {
    padding: 16px 24px;
  }

  @media(max-width: 640px) {
    flex-direction: column;
  }

  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
  
  > p, ul {
    margin-top: 40px;
  }

  ul {
    list-style: none;

    &.spaced {
      > li {
        margin-top: 20px;
      }
    }
  }

  &:nth-child(even) {
    background-color: ${(props) => props.theme.colors.textPrimary};
    color: ${(props) => props.theme.colors.backgroundPrimary};
  }

  div.row {
    min-width: 100px;
    display: flex;
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media(max-width: 500px) {
      flex-direction: column;

      ul + ul {
        margin-top: 0;
      }
    }

  }

  > div {
    flex: 1;

    @media(max-width: 1280px) {
      padding: 20px 0;
    }
    
    @media(max-width: 500px) {
      padding: 16px 0;
    }

    & + div {
      padding-right: 80px;
      border-left: 1px solid ${(props) => props.theme.colors.textPrimary};
      
      @media(max-width: 640px) {
        border-left: 0;
      }
    }
  }
`;

export const ProjectsSection = styled(BaseSection)`

`;

export const ProjectsSectionHeader = styled.div`
  > ul {
    list-style: none;

    display: flex;
    gap: 2rem;

    li {      
      cursor: pointer;
      
      &:nth-child(2) {
        opacity: 0.5;
      }
    }

  }
`;

export const ProjectsList = styled.div`
  > ul {
    list-style: none;

    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
    gap: 2rem;
  }
`;

export const ProjectCard = styled(Link)`
  display: block;
  position: relative;
  max-height: 75vh;
  height: 700px;
  width: 500px;
  padding: 1rem;
  transition: background-color 0.5s;
  overflow: hidden;

  border: 1px solid ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.textPrimary};
  color: ${(props) => props.theme.colors.white};

  
  @media(max-width: 640px) {
    flex-direction: column;
    max-width: 70vw; 
    max-height: calc( 700 / 500 *  70vw); 
  }

  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }

  .foreground {    
    z-index: 10;
    svg {

      @media(max-width: 640px) {
        scale: 0.5;
      }

      path {
        transition: fill 0.7s;
        fill: ${(props) => props.theme.colors.white};
      }
    }
  }

  &:hover {
    background-color: transparent;
  }

  .hiddenground {
    opacity: 0;
    filter: blur(2px);
  }
  
  .foreground, .hiddenground {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    transition: opacity 0.7s;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    .foreground svg path {
      fill: ${(props) => props.theme.colors.textPrimary};
    }

    .hiddenground {
        opacity: 1;
    }
  }
    

`;

export const ContactsSection = styled(BaseSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  > ul {
      list-style: none;
      gap: 2rem;

      > li {
        margin-top: 2rem;
        text-align: center;

        a {
          font-size: 2rem;
          text-decoration: none;
          color: ${(props) => props.theme.colors.textPrimary};
          font-weight: bold;
        }
      }
    }
`;
