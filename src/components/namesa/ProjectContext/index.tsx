import React from 'react';

import {
  Container, Content, RPGSessionsImage, RPGSessionsImageContainer
} from './styles';

const ProjectContext = (): JSX.Element => (
  <Container>
    <Content>
      <h1>Contexto</h1>
      <p>
        Certo dia, depois de ver uma mesa de rpg de mesa online, tive vontade de jogar mas todos os lugares que eu buscava não encontrava pessoas dispostas a jogar na minha cidade, então, me perguntei:
        <span className="highlight"> Como reunir pessoas interessadas em jogar rpgs de mesa?</span>
      </p>
    </Content>
    <RPGSessionsImageContainer>
      <RPGSessionsImage />
    </RPGSessionsImageContainer>
  </Container>
);

export default ProjectContext;
