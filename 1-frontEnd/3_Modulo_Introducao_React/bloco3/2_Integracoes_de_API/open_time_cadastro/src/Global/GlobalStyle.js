import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
 * {
    margin : 0;
    padding : 0;
    box-sizing : border-box;
 }

 body {
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 550px;
    // height : 500px
}
`