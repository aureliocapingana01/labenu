import axios from "axios";
import React from "react";

class DetailsPlaylist extends React.Component {
  state = {
    arrPlylist : []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'

    axios.get(url, {
      headers : {
        Authorization : 'aurelio-capingana-hopper'
      }
    })
    .then((res) => {
      this.setState({arrPlylist : res.data.result.list})
    })
    .catch((err) => {
      alert('Erro, tente mais tarde')
      console.log(err.response)
    })
  }

  render() {
    return (
      <>
      <h2>Tela -  DetailsPlaylist</h2>
      {
        this.state.arrPlylist.map((playlist) => {
          return (
            <ol Type="start">
              <li > {playlist.name} </li>
            </ol>
          )
        })
      }
      <button onClick={this.props.details}>Voltar</button>
      </>
    )
  } 
}

export default  DetailsPlaylist;
