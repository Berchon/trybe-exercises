import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { addCustomer } from '../actions';
// import NotLoggedIn from '../pages/NotLoggedIn';
import './formCustomer.css';

class FormCustomer extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      email: '',
    };
  }

  clickOnButton(event) {
    this.props.addCustomer(this.state);
    this.setState({ 
      name: '',
      age: '',
      email: '',
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return (<Redirect to="/notLoggedIn" />);
      // return (<NotLoggedIn />);
    }
    return(
      <div className="form-customer-container">
        <form
          className="form-customer-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label className="form-customer-label" htmlFor="name">
            Nome
          </label>
          <input
            onChange={(event) => this.handleChange(event)}
            value={this.state.name}
            className="form-customer-input"
            type="text"
            name="name"
          />
          <label className="form-customer-label" htmlFor="age">
            Idade
          </label>
          <input
            onChange={(event) => this.handleChange(event)}
            value={this.state.age}
            className="form-customer-input"
            type="text"
            name="age"
          />
          <label className="form-customer-label" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={(event) => this.handleChange(event)}
            value={this.state.email}
            className="form-customer-input"
            type="text"
            name="email"
          />
          <button
            onClick={(event) => this.clickOnButton(event)}
            className="form-customer-button"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addCustomer: (customer) => dispatch(addCustomer(customer)),
});

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCustomer);
