import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'
import Menu from '../components/Menu';
import Balloon from '../components/Balloon';
import FormCustomerList from '../components/FormCustomerList';
import './pages.css';

class CustomerList extends Component {
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
    );
  }

  render() {
    const customers = this.props.addCustomer;
    const { user } = this.props;
    if (!user) {
      return (<Redirect to="/notLoggedIn" />);
    }
    return (
      <div>
        <div className="pages-container">
          <div className="pages-content">
            <div className="pages-container-left">
              <h1 className="pages-title">Cadastro de Clientes</h1>
              {this.printMenu()}
            </div>
            <div className="pages-container-right">
              {customers.length ? (
                <div className="pages-content-right">
                  {customers.map((customer, index) => {
                    return (
                      <Balloon id={index}>
                        <FormCustomerList id={index} customer={customer} />
                      </Balloon>
                    );
                  })}
                </div>
              ) : (
                <Balloon>Nenhum cliente Cadastrado.</Balloon>
              )}
            </div>
          </div>
        </div>
        <footer className="pages-footer">
          Ícones feitos por &nbsp;
          <a
            className="pages-footer-links"
            href="https://www.flaticon.com/br/autores/srip"
            title="srip"
          >
            srip
          </a>
          &nbsp; from &nbsp;
          <a
            className="pages-footer-links"
            href="https://www.flaticon.com/br/"
            title="Flaticon"
          >
            www.flaticon.com
          </a>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users.user,
  addCustomer: state.customer,
});

export default connect(mapStateToProps)(CustomerList);
