import React from "react";
import styled from "styled-components";
import TrackCard from "./TrackCad";
import { baseUrl, axiosConfig } from "../../Constantes";
import axios from "axios";

const PlaylistDetailsContainer = styled.div`
  background-color: green;
  display: flex;
  flex-direction: column;
  /* padding: 2rem; */
  /* gap: 2rem; */

  button {
    width: 200px;
    padding-inline-start: 4px;
  }
`;
const TrackCreationForm = styled.form`
  display: flex;
  /* flex-direction: column; */
  width: 100vw;
  height: 100px;
  justify-content: space-around;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
  }
`;


class PlaylistDetails extends React.Component {
  state = {
    tracks: [],
    trackName : '',
    trackArtist : '',
    trackUrl : '',
  };

  componentDidMount = () =>{
    this.getPlaylistTracks()
  }

  // Para pegar as musicas
  getPlaylistTracks = () => {
    axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(res => {
  
      this.setState({tracks : res.data.result.tracks})
    })
    .catch(err => {
      console.log(err)
    })
  }

  // Funcao para remover musica
  removeTrackFromPlaylist = trackId => {
    axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig)
    .then(() => {
      this.getPlaylistTracks()
    })
    .catch(err => {
      console.log(err)
    })
  }

  // Funcao para adicioanr musica
  addTracksPlayList = e => {
    e.preventDefault()

    const body = {
      name : this.state.trackName,
      artist : this.state.trackArtist,
      url : this.state.trackUrl
    }
    axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig)
    .then(() => {
      this.getPlaylistTracks()
      this.setState({
        trackName : '',
        trackArtist : '',
        trackUrl : ''
      })
    })
    .catch(err => {
      console.log(err)
    })
  }


  // para controlar todos os inputs
  controlInpts = e => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {

    const track = this.state.tracks.map((music) => {
      return (
        <TrackCard
          key={music.id}
          trackName={music.name}
          artist={music.artist}
          url={music.url}
          trackId={music.id}
          deletarTrack={this.removeTrackFromPlaylist}
        />
      );
    });

    return (
      <PlaylistDetailsContainer>
        PlaylistDetails
        
        <TrackCreationForm onSubmit={this.addTracksPlayList} >
          <div>
            <label> Nome da Música:</label>
              <input placeholder="Nome da musica" 
              name="trackName"
              value={this.state.trackName}
              onChange={this.controlInpts}
              />
          </div>
          <div>
            <label>Nome do Artista:</label>
              <input placeholder="Nome do artista" 
              name="trackArtist"
              value={this.state.trackArtist}
              onChange={this.controlInpts}
              />
          </div>
          <div>
            <label>Url da Música:</label>
              <input placeholder="Url da musica" 
              name="trackUrl"
              value={this.state.trackUrl}
              onChange={this.controlInpts}
              />
          </div>
          <button type="submit"> Adicionar Musica</button>
        </TrackCreationForm>

        {track}

        <button onClick={() => this.props.trocarDeTela("playlists", "")}>
          Voltar para Playlist
        </button>
      </PlaylistDetailsContainer>
    );
  }
}
export default PlaylistDetails;
