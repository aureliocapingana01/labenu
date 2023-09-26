import axios from "axios";
import React from "react";

class  CreatePlaylist extends React.Component {
    state = {
        inputName : ''
    }

    controlName = e => {
        this.setState({inputName : e.target.value})
    }

    createPlaylist = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

        const body = {
            name : 'this.state.inputName'
        }

        axios.post(url, body, {
            headers : {
                Authorization : 'aurelio-capingana-hopper'
            }
        })
        .then(() => {
            alert('play list criado com sucesso')
        })
        .catch((err) => {
            console.log(err.response)
            alert('erro, tente mais tarde')
        })
        .finally(() => {
            this.setState({inputName : ''})
        })  
    }

  render() {
    return (
      <>
      <h1>Bem vindo</h1>
      <input placeholder="Crie sua playList" 
       value={this.state.inputName} onChange={this.controlName}
      />
      <button onClick={this.createPlaylist}>Criar Play List</button>

      <button onClick={this.props.create}>Detalhes da Play List</button>
      </>
    )
  } 
}

export default CreatePlaylist;
