import React from "react";
import { ConjuntoDeItens } from "./ItensStyle";



class Itens extends React.Component {
   
  render() {
    return (
      <ConjuntoDeItens>
        <p> {this.props.quantidade} </p>
        <p> {this.props.nome} </p>
        <button 
        onClick={this.props.remover} >Remover</button>
      </ConjuntoDeItens>
    );
  }
}

export default Itens;
