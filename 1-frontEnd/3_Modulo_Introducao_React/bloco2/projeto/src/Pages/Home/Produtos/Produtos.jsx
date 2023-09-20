import React from "react";
import { Cabecalho, GroupCard } from "./ProdutoStyle";
import CardProdutos from "../CardProdutos/CardProdutos";


class Produtos extends React.Component {
  render() {
    const produtosOrdenados =
      this.props.arrProdutos &&
      this.props.arrProdutos.sort((a, b) => {
        if (this.props.order === "Crescente") {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });

    // Para mapear e renderizar os produtos na tela
    const produtosMapeados =
      produtosOrdenados &&
      produtosOrdenados.map((produto) => {
        return (
          <CardProdutos
            img={produto.imgUrl}
            nome={produto.name}
            valor={produto.price}
            add={() => this.props.addCarrinho(produto)}
          />
        );
      });

    return (
      <div>
        <Cabecalho>
          <p>Quantidade de Produtos: {this.props.quantity} </p>
          <label htmlFor="">
            Ordenação:
            <select onChange={this.props.onChangeOrder}>
              <option value="">Nenhum</option>
              <option value="Crescente">Crescente</option>
              <option value="Decrescente">Descrecente</option>
            </select>
          </label>
        </Cabecalho>

        <GroupCard>{produtosMapeados}</GroupCard>
      </div>
    );
  }
}
export default Produtos;
