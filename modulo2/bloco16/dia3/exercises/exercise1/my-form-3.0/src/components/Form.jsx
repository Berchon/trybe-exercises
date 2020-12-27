import React, { Component } from 'react';
import './Form.css';

const states = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: 'Rio de Janeiro',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  alert: false,
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.resetForm = this.resetForm.bind(this);
    this.state = INITIAL_STATE;
  }

  resetForm(callBack) {
    this.setState(INITIAL_STATE);
    callBack();
  }

  submitForm(event, callBack) {
    event.preventDefault();
    callBack(this.state);
    this.setState(INITIAL_STATE);
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  changeHandler = (event) => {
    let { name, value } = event.target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validateAddress(value);

    this.updateState(name, value);
  };

  validateAddress = (address) => address.replace(/[^\w\s]/gi, '');

  updateState(name, value) {
    this.setState((state) => ({
      [name]: value,
    }));
  }

  validateField(fieldName, value) {
    switch (fieldName) {
      case 'email':
        const isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2})$/i);
        return isValid ? '' : ' is invalid';
      default:
        break;
    }
    return '';
  }

  onBlurHandler = (event) => {
    let { name, value } = event.target;
    if (name === 'city') value = value.match(/^\d/) ? '' : value;

    this.updateState(name, value);
  };

  render() {
    const { saveState, clearState } = this.props;
    return (
      <div className="div-main">
        <div className="div-content">
          <form
            className="form-content"
            onSubmit={(event) => this.submitForm(event, saveState)}
          >
            <fieldset className="fieldset-container">
              <legend>Dados pessoais</legend>
              <div className="container1">
                <label className="label-text" htmlFor="name">
                  Nome:
                </label>
                <input
                  className="input-container"
                  type="name"
                  name="name"
                  maxLength="40"
                  required
                  value={this.state.name}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container2">
                <label className="label-text" htmlFor="cpf">
                  CPF:
                </label>
                <input
                  className="input-container"
                  type="text"
                  name="cpf"
                  maxLength="11"
                  required
                  value={this.state.cpf}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container">
                <label className="label-text" htmlFor="email">
                  Email:
                </label>
                <input
                  className="input-container"
                  type="email"
                  name="email"
                  maxLength="50"
                  required
                  value={this.state.email}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container">
                <label className="label-text" htmlFor="address">
                  Endereço
                </label>
                <input
                  className="input-container"
                  type="text"
                  name="address"
                  maxLength="200"
                  required
                  value={this.state.address}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container1">
                <label className="label-text" htmlFor="city">
                  Cidade:
                </label>
                <input
                  className="input-container"
                  type="text"
                  name="city"
                  maxLength="28"
                  required
                  value={this.state.city}
                  onBlur={this.onBlurHandler}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container2">
                <label className="label-text" htmlFor="countryState">
                  Estado:
                </label>
                <select
                  className="input-container"
                  name="countryState"
                  required
                  value={this.state.countryState}
                  onChange={this.changeHandler}
                >
                  {states.map((value, key) => (
                    <option key={key}>{value}</option>
                  ))}
                </select>
              </div>
            </fieldset>
            <fieldset className="fieldset-container">
              <legend>Dados pessoais</legend>
              <div className="container">
                <label className="label-text" htmlFor="resume">
                  Resumo do currículo:
                </label>
                <textarea
                  className="input-container textarea-container"
                  name="resume"
                  maxLength="1000"
                  required
                  value={this.state.resume}
                  onChange={this.changeHandler}
                />
              </div>
              <div className="container">
                <label className="label-text" htmlFor="role">
                  Cargo:
                </label>
                <input
                  className="input-container"
                  type="text"
                  name="role"
                  maxLength="40"
                  required
                  value={this.state.role}
                  onChange={this.changeHandler}
                  onMouseEnter={() => {
                    if (!this.state.alert) {
                      this.setState({ alert: true });
                      alert('Preencha com cuidado esta informação.');
                    }
                  }}
                />
              </div>
              <div className="container">
                <label className="label-text" htmlFor="roleDescription">
                  Descrição do cargo:
                </label>
                <textarea
                  className="input-container textarea-container"
                  name="roleDescription"
                  maxLength="500"
                  value={this.state.roleDescription}
                  onChange={this.changeHandler}
                />
              </div>
            </fieldset>
            <div className="buttons-container">
              <button className="buttons" type="submit">
                Consolidar
              </button>
              <button
                className="buttons"
                onClick={() => this.resetForm(clearState)}
                type="reset"
              >
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
