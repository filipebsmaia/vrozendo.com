import React from 'react';

import { Container, PersonasImage } from './styles';

import personaArthurImg from '@assets/persona_arthur.png';
import personaRaquelImg from '@assets/persona_raquel.png';

const NamesaPersonas = (): JSX.Element => (
  <Container>
    <div>
      <h1>Personas</h1>
      <p>
        Tendo em vista tudo até então recolhido e verificado, montei 2 personas com os perfis mais próximos dos entrevistados e usuários para qual eu estava buscando a solução
      </p>
    </div>
    <div>
      <PersonasImage src={personaArthurImg} alt="" layout="responsive" />
      <PersonasImage src={personaRaquelImg} alt="" layout="responsive" />
    </div>
  </Container>
);

export default NamesaPersonas;
