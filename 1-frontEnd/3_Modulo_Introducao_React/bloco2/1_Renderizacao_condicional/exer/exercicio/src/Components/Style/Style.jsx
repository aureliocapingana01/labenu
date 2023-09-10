import styled from "styled-components";
import { Theme } from "../Theme";


export const Section = styled.section `
 background-color : ${Theme.colors.primary};
 display : flex;
 flex-direction : column;
 width : 550px;
 height : 550px;
 margin : auto;
 padding : 2rem;
 border-radius: 0 25px;

 & h1 {
    flex : 1;
    font-size : 2.5rem;
    text-align : center;
    margin-bottom : 4rem;
    font-weight : 800
 }
 & div {
    flex : 2;
    font-size : 1.2rem;
    font-weight : 500;
    word-spacing: 3px;
 }
 & button {
    width : 100%;
    background-color : ${Theme.colors.primary3};
    padding : 5px;
    color : ${Theme.colors.primary4};
    font-weight : 500;
    font-size : 1.2rem;
    text-align: center;
    border-radius: 25px;
    display: block;
    vertical-align: middle;
    border:none;

    &:hover {
    background-color : ${Theme.colors.primary4}; 
    color : ${Theme.colors.primary3};
    }
 }
`