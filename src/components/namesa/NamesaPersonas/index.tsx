import React from 'react';

import { Container, PersonasImage } from './styles';

import personaArthurImg from '@assets/persona_arthur.png';
import personaRaquelImg from '@assets/persona_raquel.png';

const NamesaPersonas = (): JSX.Element => (
  <Container>
    <div>
      <h1>Personas</h1>
      <p>
        Tendo em vista tudo até então recolhido e verificado,foi necessário montar 2 personas pois foi observado 2 padrões de usuário sendo eles:
      </p>
    </div>
    <div>
      <PersonasImage src={personaArthurImg} alt="" layout="responsive" />
      <PersonasImage src={personaRaquelImg} alt="" layout="responsive" />
    </div>
  </Container>
);

export default NamesaPersonas;
