import React from "react";

class Form extends React.Component {
    // Inputs controlados

    state = {
        name :'',
        email :''
    }
    controlName = (e) => {
        this.setState({name : e.target.value})
    } 
    controlEmail = (e) => {
        this.setState({email : e.target.value})
    }
    render() {
        console.log(this.state.email)
        return(
            <>
            <hr />
              <h1>Inputs Controlados - Form</h1>
              <input placeholder="Name" value={this.state.name} onChange={this.controlName} 
              />
              <input placeholder="E-mail" value={this.state.email} onChange={this.controlEmail} 
              />
            </>
        )
    }
}
export default Form