import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import FormLogin from '../components/FormLogin';
import Balloon from '../components/Balloon';
import './pages.css';

class Login extends Component {
  constructor() {
    super();
    this.printBalloon = this.printBalloon.bind(this);
  }

  printBalloon() {
    const { user } = this.props;
    if (!user) {
      return (<span>Insira seu usuário e senha.</span>);
    }
    return (
      <span>{`Bem vindo, ${user}!`}</span>
    )
  }

  render() {
    return(
      <div>
        <div className="pages-container">
          <div className="pages-content">
            <div className="pages-container-left">
              <h1 className="pages-title">Cadastro de Clientes</h1>
              <Menu text="Home" route="/" />
              <FormLogin />
            </div>
            <div className="pages-container-right">
              <Balloon>
                {this.printBalloon()}
              </Balloon>
            </div>
          </div>
        </div>
        <footer className="pages-footer">
        Ícones feitos por 
          &nbsp;
          <a className="pages-footer-links" href="https://www.flaticon.com/br/autores/srip" title="srip">
            srip
          </a>&nbsp;
          from &nbsp;
          <a className="pages-footer-links" href="https://www.flaticon.com/br/" title="Flaticon">
            www.flaticon.com
          </a>
        </footer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
})

export default connect(mapStateToProps)(Login);