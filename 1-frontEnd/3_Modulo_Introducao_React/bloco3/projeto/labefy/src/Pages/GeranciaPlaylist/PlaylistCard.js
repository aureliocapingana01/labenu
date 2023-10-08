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
      <button onClick={() => props.trocarDeTela("playlistDetails", props.playlistId)}>
        Abrir Playlist
      </button>
      {/* <button>Deletar Playlist</button> */}
      <p>{props.name} </p>
      <button onClick={() => props.delete(props.playlistId)}>Deletar</button>
    </PlaylistCardContainer>
  );
};
export default PlaylistCard;
