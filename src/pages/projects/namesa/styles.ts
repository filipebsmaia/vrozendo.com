import styled, { css } from 'styled-components';

import BaseContainer from '@components/BaseContainer';
import { Link } from '@components/Link';

export const Container = styled(BaseContainer)`
  position: relative;
  background-color: #12121A;
  color: #FFF;
  /* flex-wrap: wrap; */
  /* height: 100%; */
`;

export const SlideTimeline = styled.ul`
  position: sticky;
  top: calc(40px + 100px);
  display: flex;
  list-style: none;
  z-index: 10;
  
  flex-wrap: wrap; // arrumar responsividade depois
  > li {

    & + li {
      margin-left: 1rem;
    }


  }
`;

interface ISlideTimelineItemProps {
  selected?: boolean;
}

export const SlideTimelineItem = styled(Link)<ISlideTimelineItemProps>`
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  opacity: ${(props) => (props.selected ? 1 : 0.3)};
  text-decoration: none;
  cursor: pointer;

`;

interface ISlidePageProps {
  single?: boolean;
}

export const SlidePage = styled.article<ISlidePageProps>`
  position: relative;
  display: flex;
  flex-direction: row;

  min-height: calc(100vh - 160px);
  
  @media(max-width: 600px) {
    min-height: 0;
  }

  width: 100%;
  margin-top: 2rem;
  
  /* padding: 64px 0; */
  /* align-items: center; */
  /* justify-content: center;
  flex-wrap: wrap; */
  /* gap: 64px; */

  > div {

    /* ${(props) => !props.single && css`
      display: flex;
      flex-direction: column;
      justify-content: center;

      min-width: 320px;
      max-width: 45%;
      width: 45%;
    `}

    &.center {
      align-items: center;
    }

    &.right {
      align-items: flex-end;
    } */
  }

  h1 {
    font-size: 4rem;
  }

  p {
    margin-top: 1rem;
  }

`;

export const SlideTitle = styled.div`
  /* position: sticky; */
  top: 50%;
  margin-bottom: 15%;
  align-self: baseline;

  .highlight {
    color: ${(props) => props.theme.colors.textPrimary};
  }

  > ul {
    margin-top: 1rem;

    li {
      margin-left: 1rem;
    }
  }

`;

export const AdventureContainer = styled.div`
  display: flex; 
  margin-top: 40px;
  align-items: center;

  > div {
    display: flex;
  }
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

  > div {
    transform: translateY(4px);
    margin-left: -30px;
  }
`;
