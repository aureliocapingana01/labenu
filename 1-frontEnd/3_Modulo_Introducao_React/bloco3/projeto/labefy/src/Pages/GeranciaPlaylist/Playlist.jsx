import React from "react";
import styled from "styled-components";
import PlaylistCard from "./PlaylistCard";
import axios from "axios";
import {axiosConfig, baseUrl} from "../../Constantes"

const PlaylistContainer = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 2rem; */
`;

class Playlists extends React.Component {

  state = {
    playlists: []
  };


  componentDidMount = () => {
    this.getAllPlaylists();
  };


  getAllPlaylists = () => {
    
    axios.get(baseUrl, axiosConfig)
      .then(res => {
        this.setState({playlists : res.data.result.list})
      })
      .catch(err => {
        console.log(err)
      })
  };

  deletePlayList = playlistId => {
    axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
    .then(() => {
      this.getAllPlaylists()
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
  
    const Playlist = this.state.playlists.map((list) => {
      return (
        <PlaylistCard
          key={list.id}
          trocarDeTela={this.props.trocarDeTela}
          name={list.name}
          playlistId={list.id}
          delete={this.deletePlayList}
        />
      );
    });

    return (
      <PlaylistContainer>
        Playlists
        {Playlist}
      </PlaylistContainer>
    );
  }
}
export default Playlists;
