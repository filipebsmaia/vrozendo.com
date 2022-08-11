import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import userflowImg from '@assets/userflow.png';

const NamesaUserflow = (): JSX.Element => (
  <Container>
    <div>
      <h1>Userflow</h1>
      <p>
        Já com a solução em mente, comecei a fazer o userflow para que ficasse visível o que seria necessário ter no aplicativo e qual seria o caminho percorrido pelo usuário.
      </p>
    </div>
    <Image src={userflowImg} alt="" />
  </Container>
);

export default NamesaUserflow;
