import React from "react";

class Comeco extends React.Component {
    render() {
        return (
            <>
               <h1>Questionário</h1>
               <div>
                   <p>Este é o comço de uma nova jornada, preenha este formulário com suas informções </p>
               </div>

               <button onClick={this.props.clickForm} >Formulário</button>
            </>
        )
    }
}
export default Comeco