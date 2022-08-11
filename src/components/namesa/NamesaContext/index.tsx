import React from 'react';

import Image from '@components/Image';

import {
  Container, Content, RPGSessionsImageContainer
} from './styles';

import mobileRPGImage from '@assets/rpg_sessions_horizontal.png';
import desktopRPGImage from '@assets/rpg_sessions_vertical.png';

const NamesaContext = (): JSX.Element => (
  <Container>
    <Content>
      <h1>Contexto</h1>
      <p>
        Certo dia, depois de ver uma mesa de rpg de mesa online, tive vontade de jogar mas todos os lugares que eu buscava não encontrava pessoas dispostas a jogar na minha cidade, então, me perguntei:
        <span className="highlight"> Como reunir pessoas interessadas em jogar rpgs de mesa?</span>
      </p>
    </Content>
    <RPGSessionsImageContainer>
      <Image
        id="desktop"
        src={desktopRPGImage}
        alt=""
        layout="responsive"
      />

      <Image
        id="mobile"
        src={mobileRPGImage}
        alt=""
        layout="responsive"
      />
    </RPGSessionsImageContainer>
  </Container>
);

export default NamesaContext;
