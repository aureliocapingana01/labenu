import {createGlobalStyle} from 'styled-components'
import { Theme } from './Theme'


export const GlobalStyle = createGlobalStyle `
 * {
     margin : 0;
     padding : 0;
     box-sizing : border-box;
  }
  body {
    background-Color : ${Theme.colors.primary4}
  }
 
`