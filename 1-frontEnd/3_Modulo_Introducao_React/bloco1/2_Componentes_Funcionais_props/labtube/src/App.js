import './App.css';
import CardVideos from './components/CardVideos';
import ItemNav from './components/ItemNav';
import styled from  'styled-components'


const MenuVertical = styled.nav `
  flex-basis: 200px;
  border-right-style: solid;
  border-right-width: thin;
  `;


function App() {

//   const titulo = 'Título do vídeo'

//   const reproduzVideo = () => {
//     alert('O video está sendo produzido...')
//   }

  return (

    <div className="App">

          <div className="tela-inteira">
        <header>
            <h1>Lab Tube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <MenuVertical>
                <ul>
                    <ItemNav titulo = 'Início' />
                    <ItemNav titulo = 'Em alta' />
                    <hr/>
                    <ItemNav titulo = 'Inscrições' />
                    <ItemNav titulo = 'Originais' />
                    <ItemNav titulo = 'Históricos' />
                </ul>
            </MenuVertical>

            <section className="painel-de-videos">
                <CardVideos img = "1" />
                <CardVideos img = "2" />
                <CardVideos img = "3" />
                <CardVideos img = "4" />
                <CardVideos img = "5" />
                <CardVideos img = "6" />
                <CardVideos img = "7" />
                <CardVideos img = "8" />
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
    </div>
  );
}

export default App;

                // <div className="box-pagina-principal media1" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=1 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>
                // <div className="box-pagina-principal media2" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=2 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>
                // <div className="box-pagina-principal media3" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=3 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>
                // <div className="box-pagina-principal media4" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=4 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>
                // <div className="box-pagina-principal media5" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=5 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>
                // <div className="box-pagina-principal media6" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=6 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>
                // <div className="box-pagina-principal media7" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=7 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>
                // <div className="box-pagina-principal media8" onClick={reproduzVideo} >
                //     <img src="https://picsum.photos/400/400?a=8 " alt="" />
                //     <h4>{titulo} </h4>
                // </div>