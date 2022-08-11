import React from 'react';

import {
  Container, Content, LearningContainer
} from './styles';

const NamesaLearning = (): JSX.Element => (
  <Container>
    <Content>
      <h1>Aprendizados</h1>
      <p>
        Esse foi meu primeiro projeto de UX e nossa tive aprendizados de sobra sendo os principais:
      </p>
    </Content>
    <LearningContainer>
      <ul>
        <li>
          <span className="highlight">1| Ouça seu usuário:</span>
          <span>Esse app teria sido tão diferente se não fosse o feedback dos testes de usabilidade feitos, testar e melhorar antes de lançar sempre.</span>
        </li>
        <li>
          <span className="highlight">2| Não pule etapas:</span>
          <span>Tive a brilhante ideia de não fazer o rabisco frame e ir direto para o wireframe, o que me poupou certo tempo mas acabei tendo que voltar e fazer certas telas no rabisco.</span>
        </li>
        <li>
          <span className="highlight">3| Acessibilidade é necessário:</span>
          <span>Isso fez com que eu mudasse as cores e o contraste em si, mas ainda é um ponto que tenho que melhorar.</span>
        </li>
        <li>
          <span className="highlight">4| Não se pode ter tudo:</span>
          <span>Anteriormente eu queria que o app tivesse diversas funções, mas com o passar do tempo (contado por sinal) foi necessário abrir mão de algumas funções, ficando apenas o necessário.</span>
        </li>
        <li>
          <span className="highlight">5| Erre agora:</span>
          <span>Errar faz parte, entender, reconhecer e aprender com isso só traz vantagens, quando eu vejo as primeiras telas desse projeto, fico envergonhado, mas foram necessárias para meu aprendizado.</span>
        </li>
        <li>
          <span className="highlight">6| Se desafie:</span>
          <span>A primeira ideia não precisa ser a final, nem sempre a forma mais fácil e óbvia é a melhor.</span>
        </li>
      </ul>
    </LearningContainer>
  </Container>
);

export default NamesaLearning;
