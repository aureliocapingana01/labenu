import React from "react";
import styled from "styled-components";
import TrackCard from "./TrackCad";

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
    tracks: [
      {
        id: "06fdec06-2283-4e56-ab24-37a35f39fd89",
        name: "Magui",
        artist: "Matias Damasio",
        url: "https://youtu.be/S-VFv4_mzuQ?si=fVg6OprtUvBJariZ",
      },
      {
        id: "86fb2d2b-8b36-4001-81c5-7ce74ed1b5be",
        name: "Cofres do Ceu",
        artist: "C4 Pedro",
        url: "https://youtu.be/lspxXX3JbMA?si=5J00m8DRdFPDVFVf",
      },
    ],
  };

  render() {
    const track = this.state.tracks.map((music) => {
      return (
        <TrackCard
          key={music.id}
          trackName={music.name}
          artist={music.artist}
          url={music.url}
        />
      );
    });

    return (
      <PlaylistDetailsContainer>
        PlaylistDetails
        <TrackCreationForm>
          <div>
            {" "}
            <label>
              Nome da Música: <input placeholder="Nome da musica" />{" "}
            </label>{" "}
          </div>
          <div>
            {" "}
            <label>
              Nome do Artista: <input placeholder="Nome do artista" />{" "}
            </label>{" "}
          </div>
          <div>
            {" "}
            <label>
              Url da Música: <input placeholder="Url da musica" />{" "}
            </label>{" "}
          </div>
          <button type="submit"> Adicionar Musica</button>
        </TrackCreationForm>
        {track}
        <button onClick={() => this.props.trocarDeTela("playlists")}>
          Voltar para Playlist
        </button>
      </PlaylistDetailsContainer>
    );
  }
}
export default PlaylistDetails;
