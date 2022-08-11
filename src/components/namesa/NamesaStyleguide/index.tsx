import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import styleguideImg from '@assets/styleguide.png';

const NamesaStyleguide = (): JSX.Element => (
  <Container>
    <div>
      <h1>Guia de estilos</h1>
      <p>
        Testes concluídos, o que falta agora? Agora que chegamos na melhor parte, criei o guia de estilos para que pudesse fazer o protótipo em alta fidelidade mantendo em mente a acessibilidade.
      </p>
    </div>
    <Image src={styleguideImg} alt="" />
  </Container>
);

export default NamesaStyleguide;
