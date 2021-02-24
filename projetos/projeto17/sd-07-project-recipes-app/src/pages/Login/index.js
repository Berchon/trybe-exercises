import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setStorage } from '../../services/localStorage';
import logo from '../../images/logo-ihooks.svg';
import Drink from '../../images/drink.png';
import tomato from '../../images/tomates.png';
import './style.css';

function Login() {
  const initialState = {
    email: '',
    password: '',
  };
  const [button, setButton] = useState(true);
  const [form, setForm] = useState(initialState);

  function handleInputs(key, value) {
    setForm({
      ...form,
      [key]: value,
    });
  }

  useEffect(() => {
    function isValidEmail() {
      const validacaoByStackOf = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
      return form.email.match(validacaoByStackOf);
    }
    function isValidPassword() {
      const passwordLength = 6;
      if (form.password.length > passwordLength) return true;
      return false;
    }
    if (isValidEmail() && isValidPassword()) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [form]);

  const printLogo = () => (
    <div className="login-logo-circle-external">
      <div className="login-logo-circle-internal">
        <img
          className="login-logo-img"
          src={ logo }
          alt="Logotipo do ihooks"
        />
      </div>
    </div>
  );

  const printForms = () => (
    <form>
      <input
        type="text"
        className="login-inputs"
        name="email"
        value={ form.email }
        placeholder="E-mail"
        data-testid="email-input"
        onChange={ (e) => handleInputs(e.target.name, e.target.value) }
      />
      <input
        type="password"
        className="login-inputs"
        name="password"
        value={ form.password }
        placeholder="Senha"
        data-testid="password-input"
        onChange={ (e) => handleInputs(e.target.name, e.target.value) }
      />
    </form>
  );

  const printButton = () => (
    <button
      type="button"
      className="login-button"
      data-testid="login-submit-btn"
      disabled={ button }
      onClick={ () => {
        setStorage('mealsToken', 1);
        setStorage('cocktailsToken', 1);
        setStorage('user', { email: form.email });
      } }
    >
      Entrar
    </button>
  );

  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <img
              className="login-images"
              src={ Drink }
              alt="Imagem de um drink"
            />
            <img
              className="login-images"
              src={ tomato }
              alt="Imagem de tomates e pimentas"
            />
          </div>
          <div className="login-logo">
            { printLogo() }
          </div>
          <div className="login-forms">
            { printForms() }
          </div>
          <div className="login-footer">
            <Link to="/comidas">
              { printButton() }
            </Link>
          </div>
        </div>
        <div className="login-elipse" />
      </div>
    </div>
  );
}
export default Login;
