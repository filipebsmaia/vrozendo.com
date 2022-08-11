import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import roomImg from '@assets/room.png';

const NamesaPrototypeRoom = (): JSX.Element => (
  <Container>
    <div>
      <h1>Sala</h1>
      <ul>
        <li>Mudança da top bar para um modelo que acomodasse melhor</li>
        <li>Adição do botão de convite</li>
        <li>Mudança do formato da sala para um formato de feed e logo em seguida para um formato de feed com reações e comentários por análise do comportamento dos usuários e feedback dos mesmos</li>
      </ul>
    </div>
    <div>
      <Image src={roomImg} alt="" />
    </div>
  </Container>
);

export default NamesaPrototypeRoom;
