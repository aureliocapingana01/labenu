import styled from "styled-components";
import { theme } from "../../../Theme";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`
// export const Form = styled.form`
//     display: flex;
//     flex-direction: column;
// `
export const DivButton = styled.div`
    display: flex;
    margin: 30px 0;
    justify-content: space-around;
`
export const Button = styled.button`
   padding: 10px 30px;
   border: none;
   font-size: 18px;
   border-radius: 10px;
   background-color: ${theme.colors.cor2};
   outline: none;
   transform: 1s ease-out;
   
   &:hover {
       background-color: ${theme.colors.cor3};
       color: #fff;
   }
`
export const Input = styled.input`
    width: 90%;
    padding: 11px;
    border-radius: 20px;
    margin-bottom: 20px;
`