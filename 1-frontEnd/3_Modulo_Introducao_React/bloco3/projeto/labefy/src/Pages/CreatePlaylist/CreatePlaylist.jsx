import React from "react";
import styled from "styled-components";
// import PlaylistCard from "../GeranciaPlaylist/PlaylistCard";
import axios from "axios";
import { axiosConfig, baseUrl } from "../../Constantes";


const Create = styled.div `
 /* background-color: red; */
 display: flex;
 flex-direction: column;
 align-items: center;
 height: 500px;
`
const PlaylistForm = styled.form `
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 2rem;
`

class CreatePlaylist extends React.Component {
  state = {
    inputName : ''
  }

    controlName = (e) => {
        this.setState({inputName : e.target.value})
    }

    createPlaylist = () => {
        const body = {
            name : this.state.inputName
        }
        axios.post(baseUrl, body, axiosConfig)
        .then(response => {
        console.log(response)
        alert('Playlist craido com sucesso')
       }) 
       .catch(err => {
        alert('Erro na criacao da playlist')
        console.log(err)
       })
    }

    render () {
        console.log(this.state.inputName)
        return (
            <Create>
               <h2>Create Playlist</h2>
               <PlaylistForm>
                 <label >Nova Playlist</label>
                 <input placeholder="Digite o nome da playlist" 
                  value={this.state.inputName} onChange={this.controlName}
                 />
                 <button onClick={this.createPlaylist}>Criar Playlist</button>
               </PlaylistForm>
            </Create>
        )
    }
}
export default CreatePlaylist