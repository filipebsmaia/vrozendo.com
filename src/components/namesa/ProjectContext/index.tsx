import React, {
  useEffect, useRef, useState
} from 'react';

import {
  Container, Content, RPGSessionsImage, RPGSessionsImageContainer
} from './styles';

const ProjectContext = (): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current || !contentRef.current || !imageContainerRef.current) {
        return;
      }
      const refY = ref.current!.getBoundingClientRect().top;
      if (refY < 400) {
        const delta = (refY - 100);
        const left = delta < 0 ? 0 : delta / 200;
        contentRef.current.style.transform = `translateX(${-left * 100}%)`;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Container ref={ref}>
      <Content ref={contentRef}>
        <h1>O contexto</h1>
        <p>
          Certo dia, depois de ver uma mesa de rpg de mesa online, tive vontade de jogar mas todos os lugares que eu buscava não encontrava pessoas dispostas a jogar na minha cidade, então, me perguntei:
          <span className="highlight"> Como reunir pessoas interessadas em jogar rpgs de mesa?</span>
        </p>
      </Content>
      <RPGSessionsImageContainer ref={imageContainerRef}>
        <RPGSessionsImage />
      </RPGSessionsImageContainer>
    </Container>
  );
};

export default ProjectContext;
