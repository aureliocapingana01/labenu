import React from "react";
import Filtros from "./Pages/Filtros/Filtro";
import { arrProdutos } from "./ArrProdutos";
import Produtos from "./Pages/Home/Produtos/Produtos";
import Carrinho from "./Pages/Carrinho/Carrinho";
import styled from "styled-components";

// Estilo do App, para todos os componentes
export const ComponentesNoApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 20px;
`;

class App extends React.Component {
  state = {
    filtroMinimo: "40",
    filtroMaximo: "",
    filtroPorNome: "",
    order: "Crescente",
    valorTotal: 0,
    carrinho: [],
  };

  // Manipulção dos inputs, por props
  manipularValorDoFiltroMinimo = (e) => {
    this.setState({ filtroMinimo: e.target.value });
  };
  manipularValorDoFiltroMaximo = (e) => {
    this.setState({ filtroMaximo: e.target.value });
  };
  manipularValorPorNome = (e) => {
    this.setState({ filtroPorNome: e.target.value });
  };

  // Para fazer os filtros dos produtos
  filtrarProdutos = () => {
    const produtosMinimo = arrProdutos.filter((produto) => {
      if (this.state.filtroMinimo) {
        return produto.price >= this.state.filtroMinimo;
      }
    });

    const produtosMaximo = produtosMinimo.filter((produto) => {
      if (this.state.filtroMaximo) {
        return produto.price <= this.state.filtroMaximo;
      } else {
        return produto;
      }
    });

    const produtoFiltrados = produtosMaximo.filter((produto) => {
      return produto.name.includes(this.state.filtroPorNome);
    });
    return produtoFiltrados;
  };

  // Para adicionar item no carrinho
  carrinho = (produto) => {
    const produtoCarrinho = this.state.carrinho.filter((item) => {
      if (item.id === produto.id) {
        return item;
      }
    });
    if (produtoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [...this.state.carrinho, produto];

      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade + 1 };
        } else {
          return item;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.somaValorTotal(produto.price);
  };

  // Para remover item no carrinho
  removerItem = (remove) => {
    if (remove.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((item) => {
        if (item.id !== remove.id) {
          return item;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (remove.id === item.id && item.quantidade >= 1) {
          return { ...item, quantidade: item.quantidade - 1 };
        } else {
          return item;
        }
      });
      this.setState({
        carrinho: novoCarrinho,
      });
    }
    this.removeValorTotal(remove.price);
  };

  // Funcao para altera o valor total ao add um item
  somaValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal + valor,
    });
  };

  // Funcao para remover o valor total ao remover um item
  removeValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal - valor,
    });
  };

  render() {

    // Para fazer os filtros dos produtos
    const filtragemDosProdutos = this.filtrarProdutos();

    return (
      <ComponentesNoApp>
        <Filtros
          //Passagem do estado por props
          minimo={this.state.filtroMinimo}
          maximo={this.state.filtroMaximo}
          nome={this.state.filtroPorNome}
          // Manipulacão de inputs
          filtroMinimo={this.manipularValorDoFiltroMinimo}
          filtroMaximo={this.manipularValorDoFiltroMaximo}
          filtroPorNome={this.manipularValorPorNome}
        />

        <Produtos // Para chamar o componente dos produtos
          quantity={filtragemDosProdutos.length}
          onChangeOrder={(e) => this.setState({ order: e.target.value })}
          order={this.state.order}
          arrProdutos={filtragemDosProdutos}
          addCarrinho={this.carrinho}
        />

        <Carrinho
          valorTotal={this.state.valorTotal}
          carrinho={this.state.carrinho}
          removerItemDoCarrinho={this.removerItem}
        />
      </ComponentesNoApp>
    );
  }
}

export default App;
