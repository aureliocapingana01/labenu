import React from "react";
import TelaDeCadastro from "./Components/TelaDeCadastro";
import TelaDeLista from "./Components/TelaDeLista";


class App extends React.Component {

  state = {
    telaAtual : 'cadastro'
  }

  trocarDeTela = () => {
    this.setState({telaAtual : this.state.telaAtual === 'cadastro' 
    ? 'lista' 
    : 'cadastro' })
  }

  render() {
    return (
      <div>
        {
          this.state.telaAtual === 'cadastro' 
          ? <TelaDeCadastro userCadastro={this.trocarDeTela} />
          : <TelaDeLista userLista={this.trocarDeTela} />
        }
      </div>
    )
  }
}

export default App;
