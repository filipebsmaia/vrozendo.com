import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import homeImg from '@assets/home.png';

const NamesaPrototypeHome = (): JSX.Element => (
  <Container>
    <div>
      <h1>Home</h1>
      <ul>
        <li>Adição do botão de notificações</li>
        <li>Mudança na distribuição das aventuras</li>
        <li>Adição das aventuras recomendadas para você</li>
        <li>Mudança no botão de criação de aventuras baseado no feedback dos usuários</li>
        <li>Retirada da navbar por analise do comportamento dos usuários</li>
      </ul>
    </div>
    <div>
      <Image src={homeImg} alt="" />
    </div>
  </Container>
);

export default NamesaPrototypeHome;
