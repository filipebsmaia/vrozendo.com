import React, {
  useCallback, useEffect, useState
} from 'react';

import ImageComponent from '@components/Image';

import {
  AdventureChat, AppChatContainer, AppImage, Container, ImageContainer
} from './styles';

import logoImg from '@assets/logo.png';
import triangleImg from '@assets/triangle.png';

const slidePageData = [
  {
    text: 'Agora chegou o meu momento!',
    image: '/assets/namesa/loading.gif'
  },
  {
    text: (
      <>
        <span>Está preparado para se aventurar? </span><br />
        <span>Eu o grande mago Namesa estou  aqui para te ajudar.</span>
      </>
    ),
    image: '/assets/namesa/loading.gif'
  },
  {
    text: 'Derrote dragões, descubra tesouros no egito antigo, explore o universo, crie e participe de aventuras com outros aventureiros.',
    image: '/assets/namesa/app_home.png'
  },
  {
    text: 'Encontre outros que querem criar momentos com você, todos aqui querem se aventurar.',
    image: '/assets/namesa/app_profile.png'
  },
  {
    text: 'Tire suas duvidas comigo! O grande mago, entenda como jogar, se preparar e se divertir!',
    image: '/assets/namesa/app_faq.png'
  },
  {
    text: 'Sabe aquele momento épico em que você e seus companheiros derrotaram um dragão? Relembre seus companheiros dele.',
    image: '/assets/namesa/app_timeline.png'
  },
  {
    text: 'Agora é sua hora de testar e observar com seus próprios olhos do que sou capaz!! Basta clickar no protótipo.',
    image: '/assets/namesa/loading.gif'
  }
];

interface IPrepareToAdventureSlideProps {}

// eslint-disable-next-line no-empty-pattern
const PrepareToAdventureSlide = ({}: IPrepareToAdventureSlideProps): JSX.Element => {
  const [page, setPage] = useState(0);

  const nextPage = useCallback(() => {
    setPage((state) => (state >= slidePageData.length - 1 ? 0 : state + 1));
  }, []);

  useEffect(() => { // Preloading images
    slidePageData.forEach((data) => {
      const img = new Image();
      img.src = data.image;
    });
  }, []);
  const data = slidePageData[page];

  return (
    <Container onClick={nextPage}>
      <div>
        <h1>Prepare para se aventurar</h1>
        <p>
          Testes concluídos, o que falta agora? Agora que chegamos na melhor parte, criei o guia de estilos para que pudesse fazer o protótipo em alta fidelidade mantendo em mente a acessabilidade.
        </p>
        <AppChatContainer>
          <AppImage>
            <ImageComponent src={logoImg} alt="Namesa Logo" />
          </AppImage>
          <AdventureChat>
            <ImageComponent src={triangleImg} alt="Triangulo Laranja" />
            <span>
              {data.text}
            </span>
          </AdventureChat>

        </AppChatContainer>

      </div>
      <ImageContainer>
        <ImageComponent src={data.image} alt="Namesa Loading" width={270} height={600} />
      </ImageContainer>
    </Container>
  );
};

export default PrepareToAdventureSlide;
