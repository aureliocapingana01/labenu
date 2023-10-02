import React from "react";
import styled from "styled-components";
import Header from "./Pages/Header/Header";
import CreatePlaylist from "./Pages/CreatePlaylist/CreatePlaylist";
import GerenciarPLaylist from "./Pages/GeranciaPlaylist/GerenciarPlaylist";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    telaAtual: "create",
  };

  trocarDeTela = (telaAtual) => {
    this.setState({ telaAtual: telaAtual });
  };

  render() {
    const tela = () => {
      if (this.state.telaAtual === "create") {
        return <CreatePlaylist />;
      } else if (this.state.telaAtual === "gerenciar") {
        return <GerenciarPLaylist />;
      }
    };
    return (
      <AppContainer>
        <Header trocarDeTela={this.trocarDeTela} />
        {tela()}
      </AppContainer>
    );
  }
}

export default App;
