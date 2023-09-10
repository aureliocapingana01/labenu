import React from 'react';
import Pagina1 from './Pages/Pagina1'
import Pagina0 from './Pages/Pagina0'
import { Section } from './Components/Style/Style';


class App extends React.Component {
  state = {
     form : false
  }

  inputForm = () => {
    this.setState({form : true})
  }

  render() {
    let pagina

    if(this.state.form) {
      pagina = <Pagina1 />
    }
    else {
      pagina = <Pagina0 clickForm={this.inputForm} />
    }
    return (
      <Section>
          {pagina}
      </Section>
    )
  }
}

export default App;
