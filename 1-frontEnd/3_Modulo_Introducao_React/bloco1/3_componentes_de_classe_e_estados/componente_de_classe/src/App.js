import './App.css';
import Contador from './Components/Contador';
import CreditCard from './Components/CreditCard';
import MeuComponente from './Components/MeusComponente';
import Form from './Components/form';



function App() {
  
  return (
    <div className="App">
      <h1>Hoje quase ganhei</h1>
      <p>Foi uma burrice da minha parte não tirar o valor</p>
      <MeuComponente valor={200} />
      <MeuComponente valor={300} />
      <MeuComponente valor={350} />

      <br></br>

      <Contador />

      <br></br>

      <Form />

      <br></br>

      <CreditCard />
    </div>
   
  );
}

export default App;
