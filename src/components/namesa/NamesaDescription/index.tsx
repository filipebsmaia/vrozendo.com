import React from 'react';

import {
  Container, Content, ThreeDimensionalAppView
} from './styles';

const NamesaDescription = (): JSX.Element => (
  <Container>
    <ThreeDimensionalAppView title="Na mesa 3d" src="https://my.spline.design/namesa-6f6252899f7a37bd19f230135db99faa/" />
    <Content>
      <h1>Namesa</h1>
      <p>
        Já passou pela situação de querer jogar rpg de mesa mas nunca encontrar outras pessoas que queiram também?
        O namesa foi pensado para solucionar esse problema.
      </p>
      <p>
        <strong>Tipo: </strong><span> Case Study</span>
      </p>
      <p>
        <strong>Duração: </strong><span> 2 semanas</span>
      </p>
      <p>
        <strong>Minha função: </strong><span> Projeto solo</span>
      </p>
    </Content>
  </Container>
);

export default NamesaDescription;
