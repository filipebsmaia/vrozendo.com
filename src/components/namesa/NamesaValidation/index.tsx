import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import validacaoImg from '@assets/validacao.png';

const NamesaValidation = (): JSX.Element => (
  <Container>
    <div>
      <h1>Validação</h1>
      <p>
        Com o resultado das pesquisas foi obtido o seguinte resultado:
      </p>
    </div>
    <div>
      <Image src={validacaoImg} alt="" />
    </div>
  </Container>
);

export default NamesaValidation;
