import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@arborswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Gilroy';
  font-weight: 700;
  src: local('Gilroy Bold'), url('../fonts/Gilroy-Bold.woff2') format('woff2');
}

@font-face {
  font-family: 'Gilroy';
  font-weight: 800, 'Extra Bold';
  src: local('Gilroy ExtraBold'), url('../fonts/Gilroy-ExtraBold.woff2') format('woff2');
}

@font-face {
  font-family: 'Gilroy';
  font-weight: 300, 'Light';
  src: local('Gilroy'), url('../fonts/Gilroy-Light.woff2') format('woff2');
}

@font-face {
  font-family: 'Gilroy';
  font-weight: 500, 'Medium';
  src: local('Gilroy'), url('../fonts/Gilroy-Medium.woff2') format('woff2');
}

@font-face {
  font-family: 'Gilroy';
  font-weight: 400, 'Regular';
  src: local('Gilroy Regular'), url('../fonts/Gilroy-Regular.woff2') format('woff2');
}

  * {
    font-family: 'GilroyHome', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
