import React, { Component } from 'react';
import './ListForm.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  componentDidMount() {
    console.log(this.props.data);
    this.setState(this.props.data.data);
  }

  render() {
    return (
      <div className="list-div-main">
        <div className="list-div-content">
          <h1 className="list-title">Dados consolidados</h1>
          <form className="list-form-content">
            <fieldset className="list-fieldset-container">
              <legend>Dados pessoais</legend>
              <div className="list-container1">
                <label className="list-label-text" htmlFor="name">
                  Nome:
                </label>
                <input
                  className="list-input-container"
                  name="name"
                  value={this.props.data.name}
                  readOnly
                />
              </div>
              <div className="list-container2">
                <label className="list-label-text" htmlFor="cpf">
                  CPF:
                </label>
                <input
                  className="list-input-container"
                  name="cpf"
                  value={this.props.data.cpf}
                  readOnly
                />
              </div>
              <div className="list-container">
                <label className="list-label-text" htmlFor="email">
                  Email:
                </label>
                <input
                  className="list-input-container"
                  name="email"
                  value={this.props.data.email}
                  readOnly
                />
              </div>
              <div className="list-container">
                <label className="list-label-text" htmlFor="address">
                  Endereço
                </label>
                <input
                  className="list-input-container"
                  name="address"
                  value={this.props.data.address}
                  readOnly
                />
              </div>
              <div className="list-container1">
                <label className="list-label-text" htmlFor="city">
                  Cidade:
                </label>
                <input
                  className="list-input-container"
                  name="city"
                  value={this.props.data.city}
                  readOnly
                />
              </div>
              <div className="list-container2">
                <label className="list-label-text" htmlFor="countryState">
                  Estado:
                </label>
                <input
                  className="list-input-container"
                  name="countryState"
                  value={this.props.data.countryState}
                  readOnly
                />
              </div>
            </fieldset>
            <fieldset className="list-fieldset-container">
              <legend>Dados pessoais</legend>
              <div className="list-container">
                <label className="list-label-text" htmlFor="resume">
                  Resumo do currículo:
                </label>
                <textarea
                  className="list-input-container list-textarea-container"
                  name="resume"
                  value={this.props.data.resume}
                  readOnly
                />
              </div>
              <div className="list-container">
                <label className="list-label-text" htmlFor="role">
                  Cargo:
                </label>
                <input
                  className="list-input-container"
                  name="role"
                  value={this.props.data.role}
                  readOnly
                />
              </div>
              <div className="list-container">
                <label className="list-label-text" htmlFor="roleDescription">
                  Descrição do cargo:
                </label>
                <textarea
                  className="list-input-container list-textarea-container"
                  name="roleDescription"
                  value={this.props.data.roleDescription}
                  readOnly
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
