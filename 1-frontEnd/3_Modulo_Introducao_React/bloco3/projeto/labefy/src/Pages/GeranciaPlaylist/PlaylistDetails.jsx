import React from "react";
import styled from "styled-components";


const PlaylistDetailsContainer = styled.div `
 background-color: green;
`

class PlaylistDetails extends React.Component {
    render () {
        return (
            <PlaylistDetailsContainer>
               PlaylistDetails
               <button onClick={() => this.props.trocarDeTela('playlists')} >Voltar para Playlist</button>
               
            </PlaylistDetailsContainer>
        )
    }
}
export default PlaylistDetails