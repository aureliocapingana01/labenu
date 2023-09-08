import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import aurelio from "./imagem/aurelio.jpg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  // 1. Com esse passo, é esperado que você pratique o checkpoint 1 - Faça com que os 3 posts que foram criados não estejam mais dentro do JSX. Eles devem estar em um array, que será mapeado para um array de componentes Post. Cada post deve ser um objeto dentro do array, e ter as 3 propriedades necessárias. O array deve estar no estado do componente **App**, no arquivo **App.js**
  // arrComponentes = []

  state = {
    userName : '',
    userPhoto : '',
    userPost : '',

    arrUser : [
      {
        id : Math.random(),
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        id : Math.random(),
        nomeUsuario: "Aurélio",
        fotoUsuario: aurelio,
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        id : Math.random(),
        nomeUsuario: "Amanda",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ]
  }

  inputName = (e) => {
    this.setState({userName : e.target.value})
  }
  inputFoto = (e) => {
    this.setState({userPhoto : e.target.value})
  }
  inputPost = (e) => {
    this.setState({userPost : e.target.value})
  }

  addPost = () => {
    const newPost = {
      id : Math.random(),
      nomeUsuario : this.state.userName,
      fotoUsuario : this.state.userPhoto,
      fotoPost : this.state.userPost
    };

    this.setState({
      arrUser : [...this.state.arrUser, newPost],
      userName : '',
      userPhoto : '',
      userPost : ''
    })
    console.log(newPost)
    console.log('Parabéns voce Postou')
  }


  render() {

    const arrPost = this.state.arrUser.map((user) => {
      return (
        <Post
        nomeUsuario = {user.nomeUsuario}
        fotoUsuario = {user.fotoUsuario}
        fotoPost = {user.fotoPost}
        />
      )
    })
    return (
      <MainContainer>
        <div>
          <input placeholder="Digite seu nome" onChange={this.inputName} 
             value={this.state.userName} 
          />
          <input placeholder="Insira sua foto" onChange={this.inputFoto} 
             value={this.state.userPhoto} 
          />
          <input placeholder="Insira seu post" onChange={this.inputPost} 
             value={this.state.userPost} 
          />

          <button onClick={this.addPost}>Enviar Post</button>
        </div>
      {arrPost}
      </MainContainer>
    )
  }
}

export default App;
