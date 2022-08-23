import React, {
  useEffect, useRef, useState
} from 'react';

import Header from '@components/Header';
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

type TimelineItems = 'introduction' | 'empathize' | 'toDefine' | 'idealize' | 'prototype' | 'thinkAbout';

const NaMesa = (): JSX.Element => {
  const [selectedTimeline, setSelectedTimeline] = useState<TimelineItems>('introduction');
  const empathizeRef = useRef<HTMLElement>(null);
  const toDefineRef = useRef<HTMLElement>(null);
  const idealizeRef = useRef<HTMLElement>(null);
  const prototypeRef = useRef<HTMLElement>(null);
  const thinkAboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const pageY = window.scrollY + 200;
      const thinkAboutY = thinkAboutRef.current?.offsetTop || 0;
      const prototypeY = prototypeRef.current?.offsetTop || 0;
      const idealizeY = idealizeRef.current?.offsetTop || 0;
      const toDefineY = toDefineRef.current?.offsetTop || 0;
      const empathizeY = empathizeRef.current?.offsetTop || 0;

      if (pageY - thinkAboutY > 0) {
        setSelectedTimeline('thinkAbout');
      } else if (pageY - prototypeY > 0) {
        setSelectedTimeline('prototype');
      } else if (pageY - idealizeY > 0) {
        setSelectedTimeline('idealize');
      } else if (pageY - toDefineY > 0) {
        setSelectedTimeline('toDefine');
      } else if (pageY - empathizeY > 0) {
        setSelectedTimeline('empathize');
      } else {
        setSelectedTimeline('introduction');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Container>

      <Header />
      <SlideTimeline>
        <li>
          <SlideTimelineItem
            href="#introduction"
            selected={selectedTimeline === 'introduction'}
          >
            ⁰ | Introdução
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem
            href="#empathize"
            selected={selectedTimeline === 'empathize'}
          >
            ¹ | Empatizar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem
            href="#toDefine"
            selected={selectedTimeline === 'toDefine'}
          >
            ² | Definir
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem
            href="#idealize"
            selected={selectedTimeline === 'idealize'}
          >
            ³ | Idealizar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem
            href="#prototype"
            selected={selectedTimeline === 'prototype'}
          >
            ⁴ | Prototipar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem
            href="#thinkAbout"
            selected={selectedTimeline === 'thinkAbout'}
          >
            ⁵ | Refletir
          </SlideTimelineItem>
        </li>
      </SlideTimeline>

      <SlidePage
        id="introduction"
      >
        <NamesaDescription />
      </SlidePage>

      <SlidePage>
        <NamesaContext />
      </SlidePage>

      <SlidePage
        id="empathize"
        ref={empathizeRef}
      >
        <NamesaHypotheses />
      </SlidePage>

      <SlidePage>
        <NamesaValidation />
      </SlidePage>

      <SlidePage
        id="toDefine"
        ref={toDefineRef}
      >
        <NamesaInsights />
      </SlidePage>

      <SlidePage>
        <NamesaPersonas />
      </SlidePage>

      <SlidePage>
        <NamesaJourney />
      </SlidePage>

      <SlidePage
        id="idealize"
        ref={idealizeRef}
      >
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

      <SlidePage
        id="prototype"
        ref={prototypeRef}
      >
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

      <SlidePage
        single
        id="thinkAbout"
        ref={thinkAboutRef}
      >
        <NamesaLearning />
      </SlidePage>
      <SlidePage single />

    </Container>
  );
};

export default NaMesa;
