import React from "react";

class Contador extends React.Component {
    
    // Declaraçao de estado
    state = {
        valorContador : 0
    }

    onClickSomar = () => {
        this.setState({valorContador : this.state.valorContador + 1})
    }

    onClickSubtrair = () => {
       if (this.state.valorContador > 0) {
        this.setState({valorContador : this.state.valorContador - 1})
       }
    }

    render() {

        return(
            <>
              <hr/> 
              <h1>Contador</h1>
              <h2>{this.state.valorContador} </h2>
              <button onClick={this.onClickSomar} >Somar</button>

              <button onClick={this.onClickSubtrair} >Subtrair</button>
            </>
        )
    }
}

export default Contador