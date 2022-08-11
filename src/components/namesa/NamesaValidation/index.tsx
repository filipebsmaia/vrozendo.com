import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import validacaoImg from '@assets/validacao.png';

const NamesaValidation = (): JSX.Element => (
  <Container>
    <div>
      <h1>Validação</h1>
      <p>
        Utilizando da pesquisa quantitativa e qualitativa para poder verificar sua veraciade, foi possivel validar que:
      </p>
    </div>
    <div>
      <Image src={validacaoImg} alt="" />
    </div>
  </Container>
);

export default NamesaValidation;
