import React from 'react';

import { Container } from './styles';

const NamesaIdeas = (): JSX.Element => (
  <Container>
    <div>
      <h1>Possíveis soluções</h1>
      <p>
        Tendo em vista as oportunidades trazidas pela jornada tive como primeira ideia: <br />
        <strong className="highlight"> A criação de um local onde as pessoas possam se encontrar para jogar e pagar pelo espaço</strong>
        , mas a ideia foi descartada pela necessidade de verificar a viabilidade de local, deslocamento e dificuladde do dia a dia.
        Sendo à segunda <strong className="highlight">um aplicativo no qual as pessoas podem conhecer outros jogadores com o mesmo interesse.</strong>
      </p>
    </div>
  </Container>
);

export default NamesaIdeas;
