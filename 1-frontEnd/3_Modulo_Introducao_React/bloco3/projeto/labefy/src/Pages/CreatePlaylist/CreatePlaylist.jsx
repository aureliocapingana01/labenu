import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, axiosConfig } from "../../Constantes";
// import { axiosConfig, baseUrl } from "../../Constantes";

const Create = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;
const PlaylistForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

class CreatePlaylist extends React.Component {
  state = {
    inputName: "",
  };

  controlName = (e) => {
    this.setState({ inputName: e.target.value });
  };

  playListCreate = (e) => {
    e.preventDefault()
    const body = {
      name : this.state.inputName
    }

    axios.post(baseUrl, body, axiosConfig)
    .then(() => {
      alert('Play list craido com sucesso')
    })
    .catch(err => {
      console.log(err)
      alert('Erro na criacão Play list')
    })
    .finally(() => {
      this.setState({inputName : ''})
    })
  }

  render() {
    // console.log(this.state.inputName)
    // console.log(this.name)
    return (
      <Create>
        <h2>Create Playlist</h2>
        <PlaylistForm onSubmit={this.playListCreate}>
          <label>Nova Playlist</label>
          <input
            placeholder="Digite o nome da playlist"
            value={this.state.inputName}
            onChange={this.controlName}
          />
          <button type='submit'>Criar Playlist</button>
        </PlaylistForm>
      </Create>
    );
  }
}
export default CreatePlaylist;
