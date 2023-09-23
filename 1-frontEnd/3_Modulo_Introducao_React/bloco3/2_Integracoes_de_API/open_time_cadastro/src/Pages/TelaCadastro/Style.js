import styled from "styled-components";
import {theme} from '../../Global/Theme'

export const TelaDeCadastro = styled.div `
 border: 1px solid black;
 display: flex;
 flex-direction: column;
 padding: 2rem;
 width: 500px;
 background-image: linear-gradient(to right, ${theme.colors.color2}, ${theme.colors.color3}) ;

 & h2 {
    text-align: center;
    margin-bottom: 2rem;
 }

 & button {
    width : 100%;
    padding : 5px 3.3;
    font-size : 19px;
    /* transition: 1s ease-out; */
    transform : 1s ease;
    border: 0 none;
    border-radius: 10px;

    &:hover {
        background-color: ${theme.colors.color1};
        color: #fff;
        transition: 1s ease-out;
    }
  }
`

export const Inputs = styled.div `
 display: flex;
 flex-direction: column;
 gap: 2rem;
 margin-bottom: 2rem;

 input {
    text-decoration: none;
    border: 0 none;
    width: 250px;
    outline: 0;
    margin-left: 5px;
    padding: 4px;
    border-bottom : 1px solid rgba(0,0,0, 0.2); 
 }

 & button {
    width : 100%;
    padding : 5px 3.3;
    font-size : 19px;
    /* transition: 1s ease-out; */
    transform : 1s ease;
    border: 0 none;
    border-radius: 10px;

    &:hover {
        background-color: ${theme.colors.color1};
        color: #fff;
        transition: 1s ease-out;
    }
}
`

