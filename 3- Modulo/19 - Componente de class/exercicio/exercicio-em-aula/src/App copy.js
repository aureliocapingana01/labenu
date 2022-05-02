import React from "react";
// import Contador from "./MeusComponentes/Contador";
import Formulario from "./MeusComponentes/Formulario";

class App extends React.Component{
  render(){
    return(
      <Formulario/>
    )
  }
  
}
export default App;


// state ={
//   valorContador : 0
// }

// somar = () =>{
//   const valorAtual = this.state.valorContador
//   const valorSoma = valorAtual + 1

//   this.setState( {valorContador : valorSoma} )
// }

// subtrair = () =>{
//   if(this.state.valorContador > 0){
//         this.setState( {valorContador : this.state.valorContador - 1} )
//   }

// }

// render(){ // renderiza assim que o estado e atualizado 
//   return(
//     <>
//       <h1>Contador</h1>
//       <h2> {this.state.valorContador} </h2>
//       <button onClick={this.somar}>Somar</button>
//       <button onClick={this.subtrair} >Subtrair</button>
//     </>
//   )

// }