import React from "react";
import Cadastro from "./Pages/TelaCadastro/Cadastro";
import Usuario from "./Pages/TelaUsuario/Usuario";

class App extends React.Component {
  state = {
    tela: false,
  };

  usuario = () => {
    this.setState({ tela: true });
  };
  cadastro = () => {
    this.setState({ tela: false });
  };

  render() {
    let newTela;

    if (this.state.tela) {
      newTela = <Usuario clickUsuario={this.cadastro} />;
    } else {
      newTela = <Cadastro clickCadastro={this.usuario} />;
    }
    return <>{newTela}</>;
  }
}

export default App;
