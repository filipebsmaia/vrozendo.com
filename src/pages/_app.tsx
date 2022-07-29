import type { AppProps } from 'next/app';

import Header from '@components/Header';

import { ThemeProvider } from '@hooks/useTheme';

import GlobalStyle from 'styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider>
    <Header />
    <Component {...pageProps} />

    <GlobalStyle />
  </ThemeProvider>
);

export default App;
