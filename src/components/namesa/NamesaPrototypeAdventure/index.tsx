import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import adventureImg from '@assets/adventure.png';

const NamesaPrototypeAdventure = (): JSX.Element => (
  <Container>
    <div>
      <h1>Aventuras</h1>
      <ul>
        <li>União da tela de aventuras disponíveis com a home</li>
        <li>Mudança na tab bar de sistemas para temáticas</li>
        <li>Troca no formato e posição do botão de filtro</li>
        <li>Adição do botão de criar mesa</li>
        <li>Alteração no formato de distribuição e tamanho das aventuras disponíveis</li>
      </ul>
    </div>
    <div>
      <Image src={adventureImg} alt="" />
    </div>
  </Container>
);

export default NamesaPrototypeAdventure;
