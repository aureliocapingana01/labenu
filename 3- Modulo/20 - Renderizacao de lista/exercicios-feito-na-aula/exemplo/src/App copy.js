import React from "react";
import styled from "styled-components"

const CardFamilia = styled.li`
border:2px solid;
border-image: linear-gradient( 50deg, red, blue) 2;
width: 300px;
display:flex ;
justify-content:space-around;
align-items: center ;
height: 30px;
list-style: none;
font-size:20px;
margin-bottom:10px;
background-color: pink;
`
const CardIdade = styled.li `
color: black;
`

class App extends React.Component {


  state = {

    meusIrmaos : [
      {nome: 'Zeferina', idade:38},
      {nome: 'Nico',     idade:36},
      {nome: 'Seceu',    idade:34},
      {nome: 'Mabele',   idade:32},  
    ]
  }

  
  minhaFamilia = this.state.meusIrmaos.map((familia) => {
    return(
      <CardFamilia>
       <li key={familia}> {familia.nome} </li>
       <CardIdade> {familia.idade} </CardIdade>
     </CardFamilia>
    ) 
  })
  
  render(){
  
    return (
  
      <div>
        <h1>Meus Famailiares</h1>
        <p> {this.minhaFamilia} </p>
      </div>
    );
  }

}
  
  export default App
  
