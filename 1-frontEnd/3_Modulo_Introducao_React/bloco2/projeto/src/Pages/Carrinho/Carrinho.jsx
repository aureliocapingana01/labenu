import React from "react";
import { ConjuntoDoCarrinho } from "./CarrinhoStyle";
import Itens from "./Itens/Itens";
// import { arrProdutos } from "../../ArrProdutos";



class Carrinho extends React.Component {
   
  render() {
    const itensDoCarrinho = this.props.carrinho && this.props.carrinho.map(item => {
      return <Itens
      key={item.id} 
      quantidade={item.quantidade}
      nome={item.name}
      remover={() => this.props.removerItemDoCarrinho(item)}
      />
    })
    return (
      <ConjuntoDoCarrinho>
        <h2>Carrinho:</h2>
        <div>
          {itensDoCarrinho}
        </div>
        <p>valor Total: R$ {this.props.valorTotal.toFixed(2)}</p>
      </ConjuntoDoCarrinho>
    );
  }
}

export default Carrinho;
