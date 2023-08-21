import React from "react";
import { Section } from "./Style";

class User extends React.Component {
  state = {
    name: "",
    cpf: "",
    age: "",
    nationality: "",
  };

  controlName = (e) => {
    this.setState({ name: e.target.value });
  };
  controlCpf = (e) => {
    this.setState({ cpf: e.target.value });
  };
  controlAge = (e) => {
    this.setState({ age: e.target.value });
  };
  controlNationality = (e) => {
    this.setState({ nationality: e.target.value });
  };

  onClickEnviar = () => {
    console.log("NOME: ", this.state.name);
    console.log("CPF : ", this.state.cpf);
    console.log("IDADE : ", this.state.age);
    console.log("NACIONALIDADE : ", this.state.nationality);

    this.setState({
      name: "",
      cpf: "",
      age: "",
      nationality: "",
    });
  };

  render() {
    // console.log(this.state.name)
    return (
      <>
        {/* <Section> sdfg </Section> */}
        <Section>
          <h1>User information</h1>

          <div>
            <h2>Informations</h2>
            <p>
              <strong>NOME: </strong> {this.state.name.toLocaleUpperCase()}{" "}
            </p>
            <p>
              <strong>CPF: </strong> {this.state.cpf.toLocaleUpperCase()}{" "}
            </p>
            <p>
              <strong>IDADE: </strong> {this.state.age.toLocaleUpperCase()}{" "}
            </p>
            <p>
              <strong>NACIONALIDADE: </strong>{" "}
              {this.state.nationality.toLocaleUpperCase()}{" "}
            </p>
          </div>

          <div>
            <h2>Dados</h2>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={this.state.name}
              onChange={this.controlName}
            />
            <input
              type="number"
              placeholder="Digite seu cpf"
              max={11}
              onChange={this.controlCpf}
              value={this.state.cpf}
            />
            <input
              type="number"
              placeholder="Digite sua idade"
              max={2}
              onChange={this.controlAge}
              value={this.state.age}
            />
            <input
              type="text"
              placeholder="Digite sua nacionalidade"
              onChange={this.controlNationality}
              value={this.state.nationality}
            />
          </div>

          <button onClick={this.onClickEnviar}>Enviar</button>
        </Section>
      </>
    );
  }
}
export default User;
