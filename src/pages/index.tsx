
import {
  useEffect, useRef, useState
} from 'react';

import type { NextPage } from 'next';

import Header, { HeaderMenuSelected } from '@components/Header';
import { Link } from '@components/Link';
import SEO from '@components/SEO';
import TextScroller from '@components/TextScroller';

import {
  AboutContent,
  AboutSection, ContactsSection, Container, HomeSection, ProjectCard, ProjectsList, ProjectsSection, ProjectsSectionHeader
} from './styles';

import NamesaLogo from '@assets/namesa_logo.svg';

const Home: NextPage<{ a: string }> = () => {
  const [selectedMenu, setSelectedMenu] = useState<HeaderMenuSelected | undefined>();
  const homeRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const pageY = window.scrollY + 200;
      const contactsY = contactsRef.current?.offsetTop || 0;
      const projectsY = projectsRef.current?.offsetTop || 0;
      const aboutY = aboutRef.current?.offsetTop || 0;
      if (pageY - contactsY > 0) {
        setSelectedMenu('contacts');
      } else if (pageY - projectsY > 0) {
        setSelectedMenu('projects');
      } else if (pageY - aboutY > 0) {
        setSelectedMenu('about');
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <SEO title="home" />
      <Header selected={selectedMenu} />
      <Container>
        <HomeSection id="home" ref={homeRef}>
          <h1>
            oi, me chamo vinicius e
            {' sou '}
            <TextScroller qualities={['criativo', 'prestativo', 'comnunicativo', 'colaborador', 'empático', 'crítico', 'positivo', 'seguro', 'motivado', 'assertivo', 'flexível', 'facilitador', 'analítico', 'simples', 'moderno', 'dinâmico']} />
          </h1>
        </HomeSection>
        <AboutSection id="about" ref={aboutRef}>
          <AboutContent>
            <h2>Sobre</h2>
            <p>
              Um amante de tecnologia, inovação e claro RPGs de mesa. Esse sou eu um designer que usa do design e suas vertentes para criar soluções viáveis, criativas e acessíveis!
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

          <AboutContent divide>
            <div>
              <h2>Softskills</h2>
              <div>
                <ul>
                  <li>Comunicativo</li>
                  <li>Prestativo</li>
                  <li>Criativo</li>
                  <li>Metodologias Ágeis</li>
                  <li>Colaborador</li>
                  <li>Crítico</li>
                  <li>Positivo</li>
                  <li>Analítico</li>
                  <li>Flexível</li>
                  <li>Decision Making</li>
                </ul>
              </div>
            </div>

            <div>
              <h2>Hardskills</h2>
              <ul>
                <li>Design Thinking</li>
                <li>UX Reseacher</li>
                <li>UX/UI Designer</li>
                <li>Web/Mobile Design</li>
                <li>Prototipação</li>
                <li>Testes de Usabilidade</li>
                <li>3D Design</li>
                <li>Design de Integração</li>
                <li>Figma</li>
                <li>HTML e CSS Básico</li>
                <li>Adobe Creative Cloud</li>
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
                  <span>dez 2019 - set 2020</span>
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
        <ProjectsSection id="projects" ref={projectsRef}>
          <ProjectsSectionHeader>
            <ul>
              <li>concluído</li>
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
                    {/* Vai vim um video aq */}
                  </div>
                </ProjectCard>
              </li>
            </ul>
          </ProjectsList>
        </ProjectsSection>
        <ContactsSection id="contacts" ref={contactsRef}>
          <ul>
            <li>
              <Link href="mailto:viniciusrozendo00@gmail.com">e-mail</Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/viniciusrozendo">linkedIn</Link>
            </li>
          </ul>
        </ContactsSection>
      </Container>

    </>
  );
};

export default Home;
