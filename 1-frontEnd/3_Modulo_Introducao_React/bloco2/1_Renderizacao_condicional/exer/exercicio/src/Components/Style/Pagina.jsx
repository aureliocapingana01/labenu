import styled from "styled-components";


export const Div = styled.div `
 display : flex; 
 flex-direction : column;
 
 & h2 {
    font-size : 1.5rem;
    text-align : center;
    margin-bottom : 4rem;
    font-weight : 700;
}
& div {
    flex : 1;
    & label {
       display : flex;
       flex-direction : column;
       margin-bottom : 1rem; 
    }
    & input, select {
        padding : 5px;
    }  
 }
 
`