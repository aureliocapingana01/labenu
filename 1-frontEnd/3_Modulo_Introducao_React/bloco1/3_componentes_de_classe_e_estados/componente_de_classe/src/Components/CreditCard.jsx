import React from "react";

class CreditCard extends React.Component {

    state = {
        name : ' ',
        number : '', 
        cvv : '' 
    }

    controlName = (e) => {
        this.setState({name : e.target.value})
    }

    controlNumber = (e) => {
        this.setState({number : e.target.value})
    }

    controlCvv = (e) => {
        this.setState({cvv : e.target.value})
    }

    clickEnviar = () => {
        console.log('Name', this.state.name )
        console.log('Name', this.state.number )
        console.log('Name', this.state.cvv )

        this.setState({
            name : '',
            number : '',
            cvv : ''
        })
    }

    render() {
        // console.log(this.state.name)
        return(
            <>
                <hr></hr>
               <strong>
                   <h1>Info Credit Card</h1>
               </strong>

               <div>
                <p>
                    <strong>Name: </strong>
                    {this.state.name}
                </p>
                <p>
                    <strong>Number: </strong>
                    {this.state.number}
                </p>
                <p>
                    <strong>Cvv: </strong>
                    {this.state.cvv}
                </p>

                <br />

                <input type="text" placeholder="Name"
                value={this.name} 
                onChange={this.controlName}
                />
                <br />
                <br />
                
                <input type="number" placeholder="Number" 
                value={this.number}
                onChange={this.controlNumber}
                />
                <br />
                <br />

                <input type="number" placeholder="Cvv"
                value={this.cvv} 
                onChange={this.controlCvv}
                />
               </div>

               <br />
            
               <button onClick={this.clickEnviar}>Enviar</button>
               <br />
               <br />
            </>
        )
    }
}
export default CreditCard