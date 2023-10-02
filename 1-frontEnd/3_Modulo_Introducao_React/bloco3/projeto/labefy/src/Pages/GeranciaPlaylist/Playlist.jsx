import React from "react";
import styled from "styled-components";
import PlaylistCard from "./PlaylistCard";

const PlaylistContainer = styled.div`
  background-color: yellow;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* gap: 2rem; */
`;

class Playlists extends React.Component {
  state = {
    playlists: [
      {
        id: 1,
        name: "ragee",
      },
      {
        id: 2,
        name: "Kuduro",
      },
    ],
  };
  render() {
    const Playlist = this.state.playlists.map((list) => {
      return (
        <PlaylistCard
          key={list.id}
          trocarDeTela={this.props.trocarDeTela}
          name={list.name}
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
