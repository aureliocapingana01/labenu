import React from "react";
import styled from "styled-components";

const TrackCardContainer = styled.div`
  margin: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
  }
`;

const TrackCard = (props) => {
  return (
    <TrackCardContainer>
      <div>
        <p>{props.trackName} - </p>
        <h4> {props.artist} </h4>
        <p> {props.url} </p>
        <p>X</p>
      </div>

      <audio controls>
        <source src={props.url} type="mp3" />
      </audio>
    </TrackCardContainer>
  );
};
export default TrackCard;
