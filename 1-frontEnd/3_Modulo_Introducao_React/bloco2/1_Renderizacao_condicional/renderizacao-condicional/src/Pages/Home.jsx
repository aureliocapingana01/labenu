import React from 'react';
import Posts from '../Components/Posts';
import Mensagens from '../Components/Mensagens';


class Home extends React.Component {
    state = {
        pagina : ''
    }

    inputPosts = () => {
        this.setState({pagina : 'posts'})
    }

    inputMensagens = () => {
        this.setState({pagina : 'mensagens'})
    }
  render () {

    let secao

    switch (this.state.pagina) {
        case 'posts':
            secao = <Posts />
            break;
        case 'mensagens':
            secao = <Mensagens />
            break;
    
        default: 
        secao = <p>Nenhuma seção selecionada</p>
            break;
    }

    return (
      <>
        <h1>Home</h1>
        <button onClick={this.inputPosts} >Posts</button>
        <button onClick={this.inputMensagens} >Mensagens</button>
        <button onClick={this.props.onClickLogout}>Logout</button>

        {secao}
      </>
    )
  }
}

export default Home;