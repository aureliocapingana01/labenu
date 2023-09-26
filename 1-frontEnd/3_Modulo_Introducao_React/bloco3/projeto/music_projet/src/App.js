import React from "react";
import CreatePlaylist from "./Pages/CreatePlayList/CreatePlaylst";
import DetailsPlaylist from "./Pages/DetailsPlaylist/DetailsPlaylis";
// import AddMusic from "./Pages/AddMusic/AddMusic";

class  App extends React.Component {
 state = {
  telaAtual : 'create'
 }

 trocarDeTela = () => {
  this.setState({
    telaAtual : this.state.telaAtual!== 'create'
    ? 'create'
    : 'details'
  })
 }
  render() {
    return (
      <>
      {
        this.state.telaAtual === 'create'
        ? <CreatePlaylist create={this.trocarDeTela} />
        : <DetailsPlaylist details={this.trocarDeTela} />
      }
      </>
    )
  } 
}

export default App;
