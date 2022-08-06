import React from "react";
import axios from "axios"


class IntegracaoApi extends React.Component{

    state ={
        music:[],
        inputPlayList: ''
    }

    componentDidMount(){ // executa o quetem dentro sem o usuario fazer nenhum ação
        this.playList()
    }

    onChangeInput = (e) => {
        this.setState({inputPlayList:e.target.value})
    }

    playList = () =>{
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
            headers:{
                Authorization: 'Aurelio-capingana-hopper'
            }
        })
        .then((response) => {
            // console.log('Solicitação com Sucesso', response.data.result.list)
            this.setState({music:response.data.result.list})
        }) //para o retorno de  sucesso
        
        .catch((error) => {
            console.log('Solicitação com Erro',error.response.data)
        }) //para o retorno de erro 
    }

    criarPlayList = () =>{

        const body ={
            name : this.state.inputPlayList
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
            headers:{
                Authorization: 'Aurelio-capingana-hopper'
            }
        })

        .then(() => {
            // console.log("Play list criada com Sucesso")
            this.setState({inputPlayList: ''})
            this.playList()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    render(){

        // this.playList()
        // console.log('Estado', this.state.music)

        // this.criarPlayList()

        // console.log(this.state.inputPlayList)

        const list =this.state.music.map((cadaplayList) => {
            return <h3>{cadaplayList.name}</h3>
        })

        return(
            <>
              <h1>Play Music</h1>
            
               <input
                 value={this.state.inputPlayList}
                 onChange={this.onChangeInput}
               />
               <button onClick={this.criarPlayList}>Cria PlayList</button>

               <>{list}</>
            </>
        )
    }
}
export default IntegracaoApi