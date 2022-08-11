import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import jornadaImg from '@assets/jornada.png';

const NamesaJourney = (): JSX.Element => (
  <Container>
    <div>
      <h1>Jornada atual</h1>
      <p>
        Com a persona pronta, fiz o mapeamento da jornada atual do usuário pretendido de acordo com os relatos coletados.
      </p>
    </div>
    <div>
      <Image src={jornadaImg} alt="" />
    </div>
  </Container>
);

export default NamesaJourney;
