import {createGlobalStyle} from 'styled-components'
import { theme } from './Theme'

 export const GlobalStyle = createGlobalStyle `
   * {
    margin: 0;
    padding: 0;
    box-sizing: borde-box
   }

   body {
    background-Color: ${theme.colors.secundary1};
   }
`