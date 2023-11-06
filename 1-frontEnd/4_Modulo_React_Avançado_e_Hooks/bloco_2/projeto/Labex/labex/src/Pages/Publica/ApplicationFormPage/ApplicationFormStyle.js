import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    /* padding: 2rem; */
`
export const Form = styled.form`
    width: 100%;
    `

export const Input = styled.input `
   width: 90%;
   padding: 10px;
   border-radius: 20px;
   margin-bottom: 10px;
   text-decoration: none;
   border: none;
   border-bottom: 1px solid #555;
   outline: none;
   `
export const Select = styled.select `
   width: 95%;
   padding: 10px;
   border-radius: 20px;
   margin-bottom: 10px;
   outline: none;
   border: none;
`
export const Option = styled.option`
    width: 90%;
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 10px;
`