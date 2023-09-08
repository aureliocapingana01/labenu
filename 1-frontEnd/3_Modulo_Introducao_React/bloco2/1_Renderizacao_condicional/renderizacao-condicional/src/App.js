import React from 'react';
import Login from './Pages/Login';
import Home from './Pages/Home';

class App extends React.Component {
  
  state = {
    login : false
  }

  fazerLogin = () => {
    this.setState({login : true})
  }

  fazerLogout = () => {
    this.setState({login : false})
  }

  render () {

    let pagina

    if (this.state.login) {
        pagina = <Home onClickLogout={this.fazerLogout} />
    }
    else {
        pagina = <Login onClickLogin={this.fazerLogin} />
    }

    return (
      <>
        <h1>welcome</h1>
        {pagina}
      </>
    )
  }
}

export default App;
