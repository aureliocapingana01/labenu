import React from "react"
import { Card, CardText } from "./CardStyle"


class CardProdutos extends React.Component {
    render() {
        return (
            <Card>
            <img src={this.props.img} alt="" />
            <CardText>
                <p> {this.props.nome} </p>
                <p>R$ {this.props.valor} </p>
                <button onClick={this.props.add} >Adicionar no Carrinho</button>
            </CardText>
            </Card>
        )
    }
}
export default CardProdutos