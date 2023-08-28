
import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';


export const GlobalStyle = createGlobalStyle `
* {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
};
body {
    background-Color : ${theme.colors.primary};
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`