
import type { NextPage } from 'next';

import { Link } from '@components/Link';
import SEO from '@components/SEO';
import TextScroller from '@components/TextScroller';

import {
  AboutContent,
  AboutSection, ContactsSection, Container, HomeSection, ProjectCard, ProjectsList, ProjectsSection, ProjectsSectionHeader
} from './styles';

import NamesaLogo from '@assets/namesa_logo.svg';

const Home: NextPage<{a: string}> = () => (
  <>
    <SEO title="home" />
    <Container>
      <HomeSection id="home">
        <h1>
          oi, me chamo vinicius e
          {' sou '}
          <TextScroller qualities={['comunicativo', 'prestativo', 'criativo', 'colaborador', 'empático', 'crítico', 'positivo', 'seguro', 'motivado', 'assertivo', 'flexível', 'facilitador', 'analítico']} />
        </h1>
      </HomeSection>
      <AboutSection id="about">
        <AboutContent>
          <h2>Quem é Vinicius?</h2>
          <p>
            <strong>Vinicius Rozendo Maia</strong> é um Feirense amante de design e musica que nas horas vagas cria com sua irmã looks, videos, pinturas e varias outras artes
          </p>
        </AboutContent>

        <AboutContent>
          <h2>Formação</h2>
          <p>
            UNIFACS - Universidade Salvador <br />
            Bacharelando em Publicidade e Propaganda <br />
            fev 2019 - nov 2022
          </p>
        </AboutContent>

        <AboutContent row>
          <div>
            <h2>Softskills</h2>
            <div className="row">
              <ul>
                <li>Comunicativo</li>
                <li>Prestativo</li>
                <li>Criativo</li>
                <li>Colaborador</li>
              </ul>
              <ul>
                <li>Critico</li>
                <li>Positivo</li>
                <li>Analitico</li>
                <li>Flexivel</li>
              </ul>
            </div>
          </div>

          <div>
            <h2>Hardskills</h2>
            <ul>
              <li>Design Thinking</li>
              <li>UX Reseacher</li>
              <li>UX/UI Designer</li>
              <li>Metodologias agéis</li>
            </ul>
          </div>
        </AboutContent>

        <AboutContent>
          <h2>Experiencia</h2>
          <ul className="spaced">
            <li>
              <p>
                <strong>Zusk</strong> <br />
                <span>Designer </span> <br />
                <span>jan de 2021</span>
              </p>
            </li>
            <li>
              <p>
                <strong>Tonnys Impressos Ltda</strong> <br />
                <span>Designer gráfico (Tempo integral)</span> <br />
                <span>set 2020 - jan 2021</span>
              </p>
            </li>
            <li>
              <p>
                <strong>Stephany Falcão Fotografia</strong> <br />
                <span>Editor de fotos</span> <br />
                <span>dez 2019 - mar 2020</span>
              </p>
            </li>
            <li>
              <p>
                <strong>Simple Comunicação Visual</strong> <br />
                <span>Arte finalista</span> <br />
                <span>set 2018 - out 2019</span>
              </p>
            </li>
          </ul>
        </AboutContent>
      </AboutSection>
      <ProjectsSection id="projects">
        <ProjectsSectionHeader>
          <ul>
            <li>estudos</li>
            <li>em andamento</li>
          </ul>
        </ProjectsSectionHeader>
        <ProjectsList>
          <ul>
            <li>
              <ProjectCard href="/projects/namesa">
                <div className="foreground">
                  <NamesaLogo />
                </div>
                <div className="hiddenground">
                  <iframe title="Na mesa 3d" src="https://my.spline.design/namesa-6f6252899f7a37bd19f230135db99faa/" />
                </div>
              </ProjectCard>
            </li>
          </ul>
        </ProjectsList>
      </ProjectsSection>
      <ContactsSection>
        <ul>
          <li>
            <Link href="mailto:viniciusrozendo00@gmail.com">E-mail</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/viniciusrozendo">LinkedIn</Link>
          </li>
        </ul>
      </ContactsSection>
    </Container>

  </>
);

export default Home;
