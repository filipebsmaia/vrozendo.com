import styled from 'styled-components';

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

export const SlidePage = styled.article`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 160px);
  min-height: calc(100vh - 160px);
  padding: 64px 0;

  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 64px;
  margin-top: 2rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-self: center; */

    min-width: 320px;
    max-width: 45%;
    width: 45%;
    /* height: 100%; */

    &.center {
      align-items: center;
    }

    &.right {
      align-items: flex-end;
    }
  }
`;

export const SlideTitle = styled.div`
  position: sticky;
  top: 50%;
  margin-bottom: 25%;
  align-self: baseline;

  h1 {
    font-size: 4rem;
  }

  p {
    margin-top: 1rem;
  }

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

export const RPGSessionsImage = styled.div`
  /* height: 300vh; */
  height: 1429px;
  width: 100%;
  background: url("/assets/rpg_sessions.png");
  background-repeat: repeat-y;
  background-position: right;
  transform: translate3d(0, 0, 0);
  
`;
