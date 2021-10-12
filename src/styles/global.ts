import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --blue-900: #145873;
    --blue-800: #176C8D;
    --blue-600: #218DA6;
    --blue-400: #3BB2BF;
    --blue-200: #80BFCC;
    --white: #FFF;
    --dark: #121212;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    background-color: var(--blue-900);
    color: var(--white);
  }
`
