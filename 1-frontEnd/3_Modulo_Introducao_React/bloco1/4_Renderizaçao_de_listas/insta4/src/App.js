import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";
import aurelio from "./imagem/aurelio.jpg";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* background-Color : red */
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
        nomeUsuario: "Paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/200/150"
      },
      {
        nomeUsuario: "Aurélio",
        fotoUsuario: aurelio,
        fotoPost: "https://picsum.photos/200/151"
      },
      {
        nomeUsuario: "Amanda",
        fotoUsuario: "https://picsum.photos/50/52",
        fotoPost: "https://picsum.photos/200/152"
      }
    ]
  }
  // postUser = this.state.arrUser.map((user) => {
  //   return (
  //     <Post
  //      nomeUsuario = {user.nomeUsuario}
  //      fotoUsuario = {user.fotoUsuario}
  //      fotoPost = {user.fotoPost}
  //     />
  //   )
  // })

  inputNomeUsuario = (e) => {
    this.setState({userName : e.target.value})
  }
  inputFotoUsuario = (e) => {
    this.setState({userPhoto : e.target.value})
  }
  inputFotoPost = (e) => {
    this.setState({userPost : e.target.value})
  }
  addPost = () => {
    const newPost = {
      nomeUsuario : this.state.userName,
      fotoUsuario : this.state.userPhoto,
      fotoPost : this.state.userPost
    };

    this.setState({
      arrUser : [...this.state.arrUser, newPost],
      userName : '',
      userPhoto : '',
      userPost : '',
    });
    console.log('Parabéns voce postou')
    console.log(newPost)
  };


  render() {
    // console.log(this.state.nomeUsuario)

    const postUser = this.state.arrUser.map((user) => {
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
        <input placeholder="Digite seu nome"
          value={this.state.userName} onChange={this.inputNomeUsuario} 
        />
        <input placeholder="Foto do usuario" 
          value={this.state.userPhoto} onChange={this.inputFotoUsuario}
        />
        <input placeholder="Foto do post" 
          value={this.state.userPost} onChange={this.inputFotoPost}
        />
        <button onClick={this.addPost}>Postar</button>
      </div>
      {postUser}
      </MainContainer>
    )
  }
}

export default App;
