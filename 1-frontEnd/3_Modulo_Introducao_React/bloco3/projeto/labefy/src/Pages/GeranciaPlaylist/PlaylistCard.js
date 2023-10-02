import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
`;

const PlaylistCard = (props) => {
  return (
    <PlaylistCardContainer>
      {/* PlaylistCard */}
      <button onClick={() => props.trocarDeTela("playlistDetails")}>
        Abrir Playlist
      </button>
      {/* <button>Deletar Playlist</button> */}
      <p>{props.name} </p>
      <p>X</p>
    </PlaylistCardContainer>
  );
};
export default PlaylistCard;
