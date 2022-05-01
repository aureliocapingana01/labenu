import React from "react";

class App extends React.Component{

  state = {
    listaFrutas : [
      'banana', 'macã', 'abacate'
    ]
  }

  adicionarFruta = () =>{
    const novaFruta = [ ...this.state.listaFrutas]
    novaFruta.push('manga')

    // this.setState({ listaFrutas : novaFruta})
  }

  render(){

    return (

      <div>
        <h1> Frutas Adicionadas</h1>
        <hr></hr>
        <p>
          {this.novaFruta}
        </p>
      </div>
    );
  }

}
  
export default App