import styled, { css } from 'styled-components';

import { Link } from '@components/Link';

export const Container = styled.header`
  display: flex;
  height: 100px;
  min-height: 100px;
`;

export const Nav = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: #12121A; */
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  
  padding: 0 100px;

  strong {
    font-weight: 500;
  }

  > ul {
    display: flex;
    list-style: none;

    > li {
      & + li {
        margin-left: 40px;
      }

      span {
        font-weight: 500;
      }
    }
  }
`;

interface INavItemProps {
  selected?: boolean;
}

export const NavItem = styled(Link)<INavItemProps>`
  position: relative;
  font-weight: 500;
  padding: 16px 0;
  text-decoration: none;
  color: ${(props) => props.theme.colors.textPrimary};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    border-radius: 1px;

    ${(props) => props.selected && css`
      background-color: #fff;
    `}
  }
`;
