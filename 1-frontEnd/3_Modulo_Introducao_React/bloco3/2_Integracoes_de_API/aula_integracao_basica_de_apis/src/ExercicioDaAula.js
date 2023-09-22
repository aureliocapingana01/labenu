import React from "react";
import axios from "axios";

class ExercicioDaAula extends React.Component {

    state = {
        palyList : [],
        erro: '',
        userInput : '',
    }

    componentDidMount(){
        this.pegarPlayList()
    }

    createPlayList = (e) => {
        this.setState({userInput : e.target.value})
        
    }

    //  Funcao para pegar as playList
    pegarPlayList = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
           headers: {
            Authorization : 'aurelio-capingana-hopper'
           } 
        })
        .then((res)=>{
            this.setState({palyList : res.data.result.list})
        })
        .catch((err)=>{
            this.setState({erro : err.response.data})
        })
    }


    //  Funcao para criar uma playlist
    criarPlayList = () => {
        const body = {
            name : this.state.userInput
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers: {
                Authorization : 'aurelio-capingana-hopper'
            }
        })
        .then(()=>{
            // console.log('Criada com sucesso')
            this.pegarPlayList()
            this.setState({userInput : ''})
        })
        .catch((error)=>{
            console.log('Erro', error.response.data)
        })
    }
    

    render() {
        // console.log(this.state.userInput)

        const list = this.state.palyList.map((item) => {
            return <h3> {item.name} </h3>
        })

        return(
            <>
              <h1>Requisicao para pegar Play List</h1>
              <input onChange={this.createPlayList} value={this.state.userInput}/>
              <button onClick={this.criarPlayList} >Cria PlayList</button>
              {list}
            </>
        )
    }
}
export default ExercicioDaAula