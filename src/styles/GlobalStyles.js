import { createGlobalStyle } from 'styled-components';
import { LatoRegular } from './fontLato';

export const GlobalStyles = createGlobalStyle`
  ${LatoRegular}
  html {
    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  a {
    text-decoration: none;
  }

  ul, li, h1, h2, h3, p, button, input, textarea, label, span, button {
    font-family: 'Lato';
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {    
    margin: 0px;
    width: 100%;
    background-image: linear-gradient(to right top, #d9dde3, #dadde3, #dcdee2, #dddee2, #dedfe1);
    min-width: 100vw;
    min-height: 100vh;
  }

  #app {
    min-width: 100vw;
    min-height: 100vh;    
  }
`
