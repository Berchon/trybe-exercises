import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import Balloon from '../components/Balloon';
import './pages.css';

class Home extends Component {
  constructor() {
    super();
    this.printMenu = this.printMenu.bind(this);
    this.printBalloon = this.printBalloon.bind(this);
  }
  printMenu() {
    const { user } = this.props;
    if (!user) {
      return (<Menu text="Login" route="/login" />);
    }
    return (
      <div>
        <Menu text="Login" route="/login" />
        <Menu text="Adiciona novo cliente" route="/customerBase" />
        <Menu text="Lista todos os clientes" route="/customerList" />
      </div>
    )
  }

  printBalloon() {
    const { user } = this.props;
    if (!user) {
      return (<span>Você deve se autenticar no sistema para poder continuar.</span>);
    }
    return (
      <span>{`Bem vindo, ${user}!`}</span>
    )
  }

  render() {
    return (
      <div>
        <div className="pages-container">
          <div className="pages-content">
            <div className="pages-container-left">
              <h1 className="pages-title">Cadastro de Clientes</h1>
              { this.printMenu() }
            </div>
            <div className="pages-container-right">
              <Balloon>
                { this.printBalloon() }
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
    );
  }
}

const mapStateToProps = state => ({
  user: state.users.user,
})

export default connect(mapStateToProps)(Home);
