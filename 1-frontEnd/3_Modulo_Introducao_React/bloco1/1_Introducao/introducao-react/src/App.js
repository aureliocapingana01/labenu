import foto from './img/Aurelio-curitiba.jpg';
import './App.css';

function App() {

  const onClickButton = () => {
    alert('O botão foi clicado...')
  }

  return (
    <div className="App">
      <h2>Aurélio Capingana</h2>
      <img className='foto' src={foto} alt='foto do aurelio capingana'/>

      <div>
        <a href='https://github.com/aureliocapingana01' target='-blank' >Aurélio Capingana - Github </a>
      
        <button onClick={onClickButton} >Clique Aqui</button>
      </div>

    </div>
  );
}

export default App;
