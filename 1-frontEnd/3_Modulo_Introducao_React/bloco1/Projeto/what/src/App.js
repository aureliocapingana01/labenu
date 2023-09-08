import React from "react";
import{Container, Section, Footer, Name, Messager, Button, Span, Span1, Div, }
from"./Components/Style";

class what extends React.Component {
  state = {
    person: [
      {
        userName: "",
        userMessager: "",
      },
      {
        usuario: "",
        mensagem: "",
      },
    ],
  };

  inputUser = (e) => {
    this.setState({ userName: e.target.value });
  };
  inputMessager = (e) => {
    this.setState({ userMessager: e.target.value });
  };

  enviarMessager = () => {
    const newMsg = {
      usuario: this.state.userName,
      mensagem: this.state.userMessager,
    };

    const setMsg = [...this.state.person, newMsg];
    this.setState({
      person: setMsg,
      userName: "",
      userMessager: "",
    });

    console.log(this.state.userName);
    console.log(this.state.userMessager);
  };

  render() {
    const listMessager = this.state.person.map((user) => {
      return (
        <p>
          <Span>{user.usuario}</Span> <Span1>{user.mensagem}</Span1>
        </p>
      );
    });
    return (
      <Container>
        <Div>

        <header>
          <h1>welcome to what</h1>
        </header>

        <Section>{listMessager}</Section>

        <Footer>
          <Name>
            <input
              placeholder="Usuário"
              onChange={this.inputUser}
              value={this.state.userName}
            />
          </Name>

          <Messager>
            <input
              placeholder="Mensagem"
              onChange={this.inputMessager}
              value={this.state.userMessager}
              />
          </Messager>

          <Button>
            <button onClick={this.enviarMessager}>Enviar</button>
          </Button>
        </Footer>
              </Div>
      </Container>
    );
  }
}
export default what;
