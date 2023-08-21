import React from "react";

class MeuComponente extends React.Component {
    render() {

        return(
            <>
               <h3>Hoje: {this.props.valor} </h3>
            </>
        )
    }
}
export default MeuComponente