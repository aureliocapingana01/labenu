import React from "react";
import styled from "styled-components"




 class App extends React.Component {

  state = {
  listaDeFrutas : [ "banana" , "maçã" , "laranja" ]
  }

  adicionaFruta1 = () =>{
   const novasFrutas = [ ...this.state.listaDeFrutas ]
   novasFrutas.push("abacate")
  
   this.setState({ listaDeFrutas : novasFrutas  })

  }




  render(){


    return (
      <div>
      
           
        

      </div>
    );

  }

};

export default App;
