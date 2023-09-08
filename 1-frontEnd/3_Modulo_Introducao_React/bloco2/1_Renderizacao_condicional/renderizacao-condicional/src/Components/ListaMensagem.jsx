import React from 'react';


class ListaMensagens extends React.Component {
  render () {
    const listaMensagens = this.props.messager

    return (
      <>
        <h3>Lista Mensagens</h3>
        {listaMensagens.map((msg) => {
            return <p>{msg} </p>
        })}
      </>
    )
  }
}

export default ListaMensagens;