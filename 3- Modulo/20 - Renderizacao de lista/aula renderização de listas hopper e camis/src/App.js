import React from "react";
import styled from "styled-components"

const CardInstrutor = styled.li`
 border: 1px solid black;
 display:flex;
 justify-content: space-between ;
 
`

const Idade = styled.li`
 color: orange;
 list-style: none;
`




 class App extends React.Component {


  //------------ exercicio 2 e 3 ---------

  state = {
      nome: "",
      idade: "" ,
    instrutores : [ 
      {nome: "Caio" , idade : 26 , id: Math.random() } , 
      {nome: "Chijo" , idade: 27 , id:Math.random()},
      {nome: "Laís" , idade: 28, id:3},
      {nome: "Mandi" , idade: 29, id:4},
      
      ]
      
  }

  adicionaInstrutor = ( ) =>{

    const novoInstrutor = {
     id: Math.random(),
      nome: this.state.nome ,
      idade:Number(this.state.idade) 
    }
   
     const novosInstrutores = [ ...this.state.instrutores , novoInstrutor   ]

      this.setState({instrutores : novosInstrutores   })
  }

  
  
  guardaNome =(event )=>{
    this.setState( {nome : event.target.value })
  }
  
  guardaIdade = (event) => {
    this.setState({ idade :  event.target.value})
  }

deletaItem = ( idDoProfPraDeletar) =>{

   const copiaDaListaDeInstrutores = [ ...this.state.instrutores ]

   const instrutoresNovos = copiaDaListaDeInstrutores.filter((itemInstrutores) =>{
     return itemInstrutores.id !== idDoProfPraDeletar 
   })

   this.setState({ instrutores : instrutoresNovos})
}


  render(){
  

  
const listaDeInstrutores = this.state.instrutores.map( ( itemInstrutores ) => {
   return  (
  
      <CardInstrutor>
        <li key={itemInstrutores}>  { itemInstrutores.nome } </li>
        <Idade > { itemInstrutores.idade  }  </Idade>
        <button onClick={ () => this.deletaItem(itemInstrutores.id) }> X </button>
      </CardInstrutor>
   
   )
  })


    return (
      <div>
      <input placeholder="Nome" value={this.state.nome} onChange={this.guardaNome}/>
        <input placeholder=" Idade" value={this.state.idade} onChange={this.guardaIdade}/>
        <button onClick={this.adicionaInstrutor}> Adiciona </button>

          <h1> Pessoas instrutoras </h1>
          <p> {listaDeInstrutores } </p>


      </div>
    );

  }

};

export default App;
