import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout, resetCustomer } from '../actions';
import './formLogin.css';

class FormLogin extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: '',
      hidden: true,
    };
  }

  clickOnButton(event) {
    if (event.target.innerText === 'Autenticar') {
      if (this.state.password === '1') {
        this.props.login(this.state.user);
        this.setState({ 
          user: '',
          password: '',
          hidden: true,
        });
      } else {
        this.setState({ hidden: false });
        setInterval(() => this.setState({ 
          hidden: true,
        }), 5000);  
      }
      return;
    }
    this.props.resetCustomer();
    return this.props.logout();
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { user } = this.props;
    let textBtn;
    user ? (textBtn = 'Sair') : (textBtn = 'Autenticar');
    return (
      <div className="form-login-container">
        <form
          className="form-login-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="form-login-label" htmlFor="user">
            Usuário
          </label>
          <input
            disabled={user}
            onChange={(event) => this.handleChange(event)}
            value={this.state.user}
            className="form-login-input"
            type="text"
            name="user"
          />
          <label className="form-login-label" htmlFor="password">
            Senha
          </label>
          <input
            disabled={user}
            onChange={(event) => this.handleChange(event)}
            value={this.state.password}
            className="form-login-input"
            type="text"
            name="password"
          />
          <div className="error-container">
            <span hidden={this.state.hidden} className="error">Usuário ou senha inválidos</span>
          </div>
          <button
            onClick={(event) => this.clickOnButton(event)}
            className="form-login-button"
            type="submit"
          >
            {textBtn}
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  resetCustomer: () => dispatch(resetCustomer()),
});

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
