import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface DefaultTheme {
    title: 'dark' | 'light';

    colors: {

      // new theme
      white: string;
      black: string;

      backgroundPrimary: string;
      textPrimary: string;

    };
  }
}
