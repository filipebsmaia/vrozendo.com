import React from 'react';

import Image from '@components/Image';

import { Container } from './styles';

import hipotesesImg from '@assets/hipoteses.png';

const NamesaHypotheses = (): JSX.Element => (
  <Container>
    <div>
      <h1>Hipóteses</h1>
      <p>
        Após o primeiro insight comecei a cogitar hipóteses as quais utilizei da pesquisa quantitativa e qualitativa para poder verificar sua veracidade:
      </p>
    </div>
    <div>
      <Image src={hipotesesImg} alt="Cards escritos: As pessoas tem interesse em jogar no presencial?; Quem procura é quem joga rpg de mesa?; O que impede elas de conseguirem?; Houve mais de uma tentativa?; Elas estariam interessadas em uma ferramenta que facilitasse o processo?" />
    </div>
  </Container>
);

export default NamesaHypotheses;
