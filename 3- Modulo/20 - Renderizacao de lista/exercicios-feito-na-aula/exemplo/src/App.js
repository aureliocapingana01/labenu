import React from "react";
import styled from "styled-components"

const CardFamilia = styled.li`
border:2px solid;
border-image: linear-gradient( 50deg, red, blue) 2;
width: 300px;
display:flex ;
justify-content:space-between;
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

    nome:'',
    idade:'',

    meusIrmaos : [
      {nome: 'Zeferina', idade:38, id:1},
      {nome: 'Nico',     idade:36, id:2},
      {nome: 'Seceu',    idade:34, id:3},
      {nome: 'Mabele',   idade:32, id:4},  
    ]
  }

  adicionaIrmao =() =>{

    const novoIrmao = {
      id:Math.random(),
      nome: this.state.nome,
      idade: Number(this.state.idade) 
    }

   const  novoIrmaos = [ ...this.state.meusIrmaos , novoIrmao ]

    this.setState( {meusIrmaos : novoIrmaos})
  }

  
  
  guardarNome = (event) =>{
    this.setState({nome: event.target.value})
  }
  
  guardarIdade = (event) =>{
    this.setState({idade: event.target.value})
  }

  deletaIrmao = (deletar) =>{
    
    const copiaIrmao = [ ...this.state.meusIrmaos]

    const irmaos = copiaIrmao.filter((familia) =>{
      return familia.id !== deletar
    })

    this.setState( {meusIrmaos : irmaos} )
  }
  
  
  render(){
  
  const minhaFamilia = this.state.meusIrmaos.map((familia) => {
    return(
      <CardFamilia>
        <li key={familia}> {familia.nome} </li>
        <CardIdade> {familia.idade} </CardIdade>
        <button onClick={() => this.deletaIrmao(familia.id)}> x </button>
      </CardFamilia>
     ) 
    })
    
    return (
  
      <div>

        <br></br>
        <h1>Meus Famailiares</h1>
        <input placeholder="nome" value={this.state.nome} onChange={this.guardarNome} />

        <input placeholder="idade" value={this.state.idade} onChange={this.guardarIdade} />

        <button onClick={this.adicionaIrmao} >Adicionar</button>
        <hr></hr>
        <p> {minhaFamilia} </p>
      </div>
    );
  }

}
  
  export default App