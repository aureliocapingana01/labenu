import React from 'react';
import ListaMensagens from './ListaMensagem';


class Mensagens extends React.Component {
    state = {
        mensagens : ['bom dia', 'hoje vc não trabalha', 'amanha ganha na loteria']
    }
  render () {
    return (
      <>
        <h1>Mensagens</h1>
        {this.state.mensagens.length ? (<p>voçê tem {this.state.mensagens.length} mensagens</p>) : (
            <p>Não tem nenhuma mensagem</p>

        )}

        {this.state.mensagens.length && <ListaMensagens messager={this.state.mensagens} />}
      </>
    )
  }
}

export default Mensagens;