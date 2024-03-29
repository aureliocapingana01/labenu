import React from "react";
import styled from "styled-components";
import Playlists from "./Playlist";
import PlaylistDetails from "./PlaylistDetails";

const Gerenciar = styled.div`
  background-color: blue;
`;

class GerenciarPLaylist extends React.Component {
  state = {
    telaAtual: "playlists",
    statePlayListId : ''
  };

  trocarDeTela = (telaAtual, playlistId) => {
    this.setState({
       telaAtual: telaAtual,
       statePlayListId : playlistId
      });
  };
  render() {
    console.log(this.state.statePlayListId)
    const tela = () => {
      if (this.state.telaAtual === "playlists") {
        return <Playlists 
        trocarDeTela={this.trocarDeTela} 
        />;
      } else if (this.state.telaAtual === "playlistDetails") {
        return <PlaylistDetails 
        trocarDeTela={this.trocarDeTela}
        playlistId={this.state.statePlayListId}
        />;
      }
    };
    return <Gerenciar>
        {tela()}
    </Gerenciar>;
  }
}
export default GerenciarPLaylist;
