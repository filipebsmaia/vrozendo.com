import styled from 'styled-components';

import BaseContainer from '@components/BaseContainer';
import BaseSection from '@components/BaseSection';

export const Container = styled(BaseContainer)`
  align-items: center;
`;

export const HomeSection = styled(BaseSection)`

  > h1 {
    display: inline-block;
    position: relative;
    font-size: 3.5rem;
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
  padding: ${(props) => (!props.row && '40px 80px')};

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
    display: flex;
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: space-between;
  }

  > div {
    flex: 1;
    padding: ${(props) => (props.row && ' 40px 80px')};

    & + div {
      padding-right: 80px;
      border-left: 1px solid ${(props) => props.theme.colors.textPrimary}
    }
  }
`;

