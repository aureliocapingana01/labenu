import React from "react";
import styled from "styled-components";


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
 /* height: 350px; */
 /* justify-content: ; */
 gap: 2rem;
`

class CreatePlaylist extends React.Component {
    state = {

    }
    render () {
        return (
            <Create>
               <h2>Create Playlist</h2>
               <PlaylistForm>
                 <label >Nova Playlist</label>
                 <input placeholder="Digite o nome da playlist" />
                 <button>Crear Playlist</button>
               </PlaylistForm>
            </Create>
        )
    }
}
export default CreatePlaylist