import React from 'react';

class Login extends React.Component {
  render () {
    return (
      <>
        <h1>Login</h1>
        <button onClick={this.props.onClickLogin}>Fazer Login</button>
      </>
    )
  }
}

export default Login;