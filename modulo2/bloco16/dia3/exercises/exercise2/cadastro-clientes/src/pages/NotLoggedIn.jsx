import React, { Component } from 'react';
import Menu from '../components/Menu';
import Balloon from '../components/Balloon';
import './pages.css';

class NotLoggedIn extends Component {
  render() {
    return(
      <div>
        <div className="pages-container">
          <div className="pages-content">
            <div className="pages-container-left">
              <h1 className="pages-title">Cadastro de Clientes</h1>
              <Menu text="Home" route="/" />
              <Menu text="Login" route="/login" />
            </div>
            <div className="pages-container-right">
              <Balloon>
                <span>Você não está autenticado no sistema. Por favor faça sua autenticação para continuar</span>
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

export default NotLoggedIn;