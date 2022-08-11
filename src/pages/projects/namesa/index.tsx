import React from 'react';

import NamesaChanges from '@components/namesa/NamesaChanges';
import NamesaContext from '@components/namesa/NamesaContext';
import NamesaDescription from '@components/namesa/NamesaDescription';
import NamesaHypotheses from '@components/namesa/NamesaHypotheses';
import NamesaIdeas from '@components/namesa/NamesaIdeas';
import NamesaInsights from '@components/namesa/NamesaInsights';
import NamesaJourney from '@components/namesa/NamesaJourney';
import NamesaLearning from '@components/namesa/NamesaLearning';
import NamesaPersonas from '@components/namesa/NamesaPersonas';
import NamesaPrototypeAdventure from '@components/namesa/NamesaPrototypeAdventure';
import NamesaPrototypeHome from '@components/namesa/NamesaPrototypeHome';
import NamesaPrototypeRoom from '@components/namesa/NamesaPrototypeRoom';
import NamesaStyleguide from '@components/namesa/NamesaStyleguide';
import NamesaUserflow from '@components/namesa/NamesaUserflow';
import NamesaValidation from '@components/namesa/NamesaValidation';
import PrepareToAdventureSlide from '@components/namesa/PrepareToAdventureSlide';

import {
  Container, SlidePage, SlideTimeline, SlideTimelineItem
} from './styles';

const NaMesa = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = '';

  return (
    <Container>
      <SlideTimeline>
        <li>
          <SlideTimelineItem selected href="#intro">
            ⁰ | Introdução
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#empathize">
            ¹ | Empatizar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#todefine">
            ² | Definir
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#idealize">
            ³ | Idealizar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#prototype">
            ⁴ | Prototipar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#thinkabout">
            ⁵ | Refletir
          </SlideTimelineItem>
        </li>
      </SlideTimeline>

      <SlidePage id="intro">
        <NamesaDescription />
      </SlidePage>

      <SlidePage>
        <NamesaContext />
      </SlidePage>

      <SlidePage id="empathize">
        <NamesaHypotheses />
      </SlidePage>

      <SlidePage>
        <NamesaValidation />
      </SlidePage>

      <SlidePage id="todefine">
        <NamesaInsights />
      </SlidePage>

      <SlidePage>
        <NamesaPersonas />
      </SlidePage>

      <SlidePage>
        <NamesaJourney />
      </SlidePage>

      <SlidePage id="idealize">
        <NamesaIdeas />
      </SlidePage>

      <SlidePage>
        <NamesaUserflow />
      </SlidePage>

      <SlidePage>
        <NamesaChanges />
      </SlidePage>

      <SlidePage>
        <NamesaPrototypeHome />
      </SlidePage>

      <SlidePage id="prototype">
        <NamesaPrototypeAdventure />
      </SlidePage>

      <SlidePage>
        <NamesaPrototypeRoom />
      </SlidePage>

      <SlidePage>
        <NamesaStyleguide />
      </SlidePage>

      <SlidePage single>
        <PrepareToAdventureSlide />
      </SlidePage>

      <SlidePage single>
        <NamesaLearning />
      </SlidePage>

    </Container>
  );
};

export default NaMesa;
