import styled from 'styled-components';

import BaseContainer from '@components/BaseContainer';
import { Link } from '@components/Link';

export const Container = styled(BaseContainer)`
  position: relative;
  background-color: #12121A;
  color: #FFF;
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

  /* min-height: calc(100vh - 160px); */
  
  @media(max-width: 600px) {
    min-height: 0;
  }

  width: 100%;
  margin-top: 2rem;


  article + & {
    margin-top: 40vh;
  }

  h1 {
    font-size: 4rem;
  }

  p {
    margin-top: 1rem;
  }

`;
