import React from "react";
import "./App.css";
import Post from "./components/Post";

class App extends React.Component {
    state = {
      listaDePosts: [],
      textoNovoPost: ""
    };
  
    onChangeTextoNovoPost = event => {
      this.setState({ textoNovoPost: event.target.value });
    };
  
    adicionarPost = () => {
      // Adiciona um post à lista
      const novoPost = {
        id: Date.now(),
        texto: this.state.textoNovoPost,
        curtido: false
      };
  
      const novaListaDePosts = [...this.state.listaDePosts, novoPost];
  
      this.setState({ 
        listaDePosts: novaListaDePosts,
        textoNovoPost : ''
      });
    };
  
    apagarPost = postId => {
      // Apaga um post da lista
      const novaListaDePosts = this.state.listaDePosts.filter(post => {
        return postId !== post.id;
      });
  
      this.setState({ listaDePosts: novaListaDePosts });
    };
  
    alterarCurtida = postId => {
      // Altera o status de curtida de um post da lista
      const novaListaDePosts = this.state.listaDePosts.map(post => {
        if (postId === post.id) {
          const novoPost = {
            ...post,
            curtido: !post.curtido
          };
          return novoPost;
        } else {
          return post;
        }
      });
  
      this.setState({ listaDePosts: novaListaDePosts });
    };
  
  render() {
    return (
      <div className="App">
         <h1>Debugando React</h1>

         <div>
          <input
            type="text"
            onChange={this.onChangeTextoNovoPost}
            value={this.state.textoNovoPost}
          />
          <button onClick={this.adicionarPost}>Adicionar</button>
        </div>
        <br />
        {this.state.listaDePosts.map(post => {
          return (
            <Post
              key={post.id}
              post={post}
              alterarCurtida={this.alterarCurtida}
              apagarPost={this.apagarPost}
            />
          );
        })}
      </div>
    )
  }
}

export default App;
