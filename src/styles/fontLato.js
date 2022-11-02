import { css } from 'styled-components';

import FontLatoRegularWoff2 from './fonts/lato-v23-latin-regular.woff2';
import FontLatoItalicWoff2 from './fonts/lato-v23-latin-italic.woff2';
import FontLato900Woff2 from './fonts/lato-v23-latin-900.woff2';


export const LatoRegular = css`
  @font-face {
    font-family: 'Lato';
    src:       
    url(${FontLatoRegularWoff2}) format('woff2');
    font-style: normal;
    font-weight: 400;    
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    src: 
      url(${FontLatoItalicWoff2}) format('woff2');           
    font-style: italic;
    font-weight: 400;    
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato-Bold';
    src:
      url(${FontLato900Woff2}) format('woff2');          
    font-style: normal;
    font-weight: 900;    
    font-display: fallback;
  }
`

