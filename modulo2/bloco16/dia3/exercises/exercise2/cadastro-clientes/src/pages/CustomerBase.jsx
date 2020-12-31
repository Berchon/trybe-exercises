import React, { Component } from 'react';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import Balloon from '../components/Balloon';
import FormCustomerBase from '../components/FormCustomerBase';
import './pages.css';

class CustomerBase extends Component {
  constructor() {
    super();
    this.printMenu = this.printMenu.bind(this);
  }
  printMenu() {
    const { user } = this.props;
    if (!user) {
      return (
        <div>
          <Menu text="Home" route="/" />
          <Menu text="Login" route="/login" />
        </div>
      );
    }
    return (
      <div>
        <Menu text="Home" route="/" />
        <Menu text="Login" route="/login" />
        <Menu text="Adiciona novo cliente" route="/customerBase" />
        <Menu text="Lista todos os clientes" route="/customerList" />
      </div>
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
                <FormCustomerBase />
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

export default connect(mapStateToProps)(CustomerBase);
