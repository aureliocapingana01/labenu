import React from "react";
import styled from "styled-components";


const PlaylistContainer = styled.div `
 background-color: yellow;
`

class Playlists extends React.Component {
    render () {
        return (
            <PlaylistContainer>
               Playlists
               <button onClick={() => this.props.trocarDeTela('playlistDetails')} >Abrir Playlist</button>
               
            </PlaylistContainer>
        )
    }
}
export default Playlists