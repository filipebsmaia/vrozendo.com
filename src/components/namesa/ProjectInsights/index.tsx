import React from 'react';

import {
  Container, Content, InsightsContainer
} from './styles';

const ProjectInsights = (): JSX.Element => (
  <Container>
    <Content>
      <h1>Principais insights</h1>
      <p>
        Seguindo com os dados extraídos e analisados das pesquisas, tive três principais insights.
      </p>
    </Content>
    <InsightsContainer>
      <ul>
        <li>
          <strong>Segurança</strong>
          <p>Foi o ponto mais citado pelos entrevistados deixando claro que precisariam se sentir seguros para sair com desconhecidos.</p>
        </li>
        <li>
          <strong>Praticidade</strong>
          <p>A solução a ser desenvolvida precisaria facilitar o processo para conseguir chegar ao ponto e ser de fácil uso.</p>
        </li>
        <li>
          <strong>Novidade</strong>
          <p>Os entrevistados querem conhecer novas pessoas, seja os jogadores novos ou antigos.</p>
        </li>
      </ul>
    </InsightsContainer>
  </Container>
);

export default ProjectInsights;
