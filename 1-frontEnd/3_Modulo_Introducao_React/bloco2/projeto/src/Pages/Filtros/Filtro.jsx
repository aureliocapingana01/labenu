import React from "react";
import { Filtro, GrupoDeFiltro } from "./Style";


class Filtros extends React.Component {
   
  render() {
    return (
      <GrupoDeFiltro>
        <h2>Filtros</h2>
        <Filtro>
          Filtro Minimo
          <input type="number" 
          onChange={this.props.filtroMinimo} value={this.props.minimo} 
          />
        </Filtro>
        <Filtro >
          Filtro Maximo
          <input type="number" onChange={this.props.filtroMaximo} value={this.props.maximo}
          />
        </Filtro>
        <Filtro >
          Busca por nome
          <input type="text" onChange={this.props.filtroPorNome} value={this.props.nome}
          />
        </Filtro>
      </GrupoDeFiltro>
    );
  }
}

export default Filtros;
