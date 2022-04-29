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

  state = {
    instrutores : [ 
      {nome: "Caio" , idade : 26} , 
      {nome: "Chijo" , idade: 27},
      {nome: "Laís" , idade: 28},
      {nome: "Mandi" , idade: 29},
      
      ]
      
  }


   //  exemplo da explicação :
   //listaComponentes = [
   //   " Item 1 "  , 
   //   " Item 2 " , 
   //   "Item 3 "
   //   ]
   
   //  listaDeDados = this.listaComponentes.map(( dado ) => {
   //    return <li key={dado} > { dado  } </li>
   
   //  })


listaDeInstrutores = this.state.instrutores.map( ( itemInstrutores ) => {
 return  (

    <CardInstrutor>
      <li key={itemInstrutores}>  { itemInstrutores.nome } </li>
      <Idade > { itemInstrutores.idade  }  </Idade>
    </CardInstrutor>
 
 )
})


  render(){


    return (
      <div>
      
      <h1> Pessoas instrutoras </h1>
      <p> {this.listaDeInstrutores } </p>


      </div>
    );

  }

};

export default App;
