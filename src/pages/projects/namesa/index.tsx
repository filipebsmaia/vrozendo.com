import React from 'react';

import Image from '@components/Image';
import PrepareToAdventureSlide from '@components/namesa/PrepareToAdventureSlide';
import ProjectContext from '@components/namesa/ProjectContext';
import ProjectDescription from '@components/namesa/ProjectDescription';

import {
  Container, SlideTitle, SlidePage, SlideTimeline, SlideTimelineItem
} from './styles';

import adventureImg from '@assets/adventure.png';
import hipotesesImg from '@assets/hipoteses.png';
import homeImg from '@assets/home.png';
import jornadaImg from '@assets/jornada.png';
import personaArthurImg from '@assets/persona_arthur.png';
import personaRaquelImg from '@assets/persona_raquel.png';
import roomImg from '@assets/room.png';
import styleguideImg from '@assets/styleguide.png';
import userflowImg from '@assets/userflow.png';
import validacaoImg from '@assets/validacao.png';

const NaMesa = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const a = '';

  return (
    <Container>
      <SlideTimeline>
        <li>
          <SlideTimelineItem selected href="#intro">
            ⁰ | Introdução
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#empathize">
            ¹ | Empatizar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#todefine">
            ² | Definir
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#idealize">
            ³ | Idealizar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#prototype">
            ⁴ | Prototipar
          </SlideTimelineItem>
        </li>
        <li>
          <SlideTimelineItem href="#thinkabout">
            ⁵ | Refletir
          </SlideTimelineItem>
        </li>
      </SlideTimeline>

      <SlidePage id="intro">
        <ProjectDescription />
      </SlidePage>

      <SlidePage>
        <ProjectContext />
      </SlidePage>

      <SlidePage id="empathize">
        <SlideTitle>
          <h1>Hipóteses</h1>
          <p>
            Após o primeiro insight comecei a cogitar hipóteses as quais utilizei da pesquisa quantitativa e qualitativa para poder verificar sua veracidade:
          </p>
        </SlideTitle>
        <div className="right">
          <Image src={hipotesesImg} alt="asdasd" />
        </div>
      </SlidePage>

      <SlidePage>
        <SlideTitle>
          <h1>Validação</h1>
          <p>
            Utilizando da pesquisa quantitativa e qualitativa para poder verificar sua veraciade, foi possivel validar que:
          </p>
        </SlideTitle>
        <div className="right">
          <Image src={validacaoImg} alt="asdasd" />
        </div>
      </SlidePage>

      <SlidePage id="todefine">
        <SlideTitle>
          <h1>Principais insights</h1>
          <p>
            Seguindo com os dados extraídos e analisados das pesquisas, tive três principais insights.
          </p>
        </SlideTitle>
        <div className="right">
          Insights aqui
        </div>
      </SlidePage>

      <SlidePage>
        <SlideTitle>
          <h1>Personas</h1>
          <p>
            Tendo em vista tudo até então recolhido e verificado, montei 2 personas com os perfis mais próximos dos entrevistados e usuários para qual eu estava buscando a solução
          </p>
        </SlideTitle>
        <div className="right">
          <Image src={personaArthurImg} alt="asdasd" />
          <Image src={personaRaquelImg} alt="asdasd" />
        </div>
      </SlidePage>

      <SlidePage>
        <SlideTitle>
          <h1>Jornada atual</h1>
          <p>
            Com a persona pronta, fiz o mapeamento da jornada atual do usuário pretendido
            de acordo com os relatos coletados.
          </p>
        </SlideTitle>
        <div className="right">
          <Image src={jornadaImg} alt="asdasd" />
        </div>
      </SlidePage>

      <SlidePage id="idealize">
        <SlideTitle>
          <h1>Ideias</h1>
          <p>
            Tendo em vista solucionar esse problema tive como primeira solução;
            <strong>A criação de um local onde as pessoas possam se encontrar para jogar </strong>
            e pagar pelo espaço, mas a ideia foi descartada pela sua viabilidade de local, deslocamento e dificuladde do dia a dia.
            Sendo à segunda um aplicativo no qual as pessoas podem conhecer outros jogadores com o mesmo interesse.
          </p>
        </SlideTitle>
        <div />
      </SlidePage>

      <SlidePage>
        <SlideTitle>
          <h1>Userflow</h1>
          <p>
            Já com a solução em mente, comecei a fazer o userflow para que ficasse visível o que seria necessário ter no aplicativo e qual seria o caminho percorrido pelo usuário.
          </p>
        </SlideTitle>
        <div />
      </SlidePage>

      <Image src={userflowImg} alt="Namesa userflow" />

      <SlidePage>
        <SlideTitle>
          <h1>Principais mudanças</h1>
          <p>
            A partir do andamento do projeto e teste com usuários, mudanças foram feitas na questão de design e usabilidade do app, sendo as principais em 3 telas.
          </p>
        </SlideTitle>
        <div />
      </SlidePage>

      <SlidePage>
        <SlideTitle>
          <h1>Home</h1>
          <ul>
            <li>Adição do botão de notificações</li>
            <li>Mudança na distribuição das aventuras</li>
            <li>Adição das aventuras recomendadas para você</li>
            <li>Mudança no butão de criação de aventuras baseado no feedback dos usuários</li>
            <li>Retirada da navbar por analise do comportamento dos usuários</li>
          </ul>
        </SlideTitle>
        <div className="center">
          <Image src={homeImg} alt="asdasd" />
        </div>
      </SlidePage>

      <SlidePage id="prototype">
        <SlideTitle>
          <h1>Aventuras</h1>
          <ul>
            <li>União da tela de aventuras disponíveis com a home</li>
            <li>Mudança na tab bar de sistemas para temáticas</li>
            <li>Troca no formato e posição do botão de filtro</li>
            <li>Adição do botão de criar mesa</li>
            <li>Alteração no formato de distribuição e tamanho das aventuras disponíveis</li>
          </ul>
        </SlideTitle>
        <div className="center">
          <Image src={adventureImg} alt="asdasd" />
        </div>
      </SlidePage>

      <SlidePage>
        <SlideTitle>
          <h1>Sala</h1>
          <ul>
            <li>Mudança da top bar para um modelo que acomodasse melhor</li>
            <li>Adição do botão de convite</li>
            <li>Mudança do formato da sala para um formato de feed e logo em seguida para um formato de feed com reações e comentários por análise do comportamento dos usuários e feedback dos mesmos</li>
          </ul>
        </SlideTitle>
        <div className="center">
          <Image src={roomImg} alt="asdasd" />
        </div>
      </SlidePage>

      <SlidePage>
        <SlideTitle>
          <h1>Guia de estilos</h1>
          <p>
            Testes concluídos, o que falta agora? Agora que chegamos na melhor parte, criei o guia de estilos para que pudesse fazer o protótipo em alta fidelidade mantendo em mente a acessabilidade.
          </p>
        </SlideTitle>
        <div />
      </SlidePage>

      <Image src={styleguideImg} alt="Namesa Styleguide" />

      <SlidePage single>
        <PrepareToAdventureSlide />
      </SlidePage>

    </Container>
  );
};

export default NaMesa;
