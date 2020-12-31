import React, { Component } from 'react';
import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { removeCustomer } from '../actions';
// import NotLoggedIn from '../pages/NotLoggedIn';
import eraseIcon from '../icons/erase.svg';
import './formCustomer.css';

class FormCustomerList extends Component {
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
    const { user, customer } = this.props;
    if (!user) {
      return (<Redirect to="/notLoggedIn" />);
    }
    return(
      <div className="form-customer-container">
        <form className="form-customer-form">
          <img
            className="eraseIcon"
            src={eraseIcon}
            alt="Excluir Cliente"
            onClick={() => this.props.removeCustomer(customer)}
          />
          <label className="form-customer-label" htmlFor="name">
            Nome
          </label>
          <input
            onChange={(event) => this.handleChange(event)}
            value={customer.name}
            className="form-customer-input"
            type="text"
            name="name"
          />
          <label className="form-customer-label" htmlFor="age">
            Idade
          </label>
          <input
            onChange={(event) => this.handleChange(event)}
            value={customer.age}
            className="form-customer-input"
            type="text"
            name="age"
          />
          <label className="form-customer-label" htmlFor="email">
            E-mail
          </label>
          <input
            onChange={(event) => this.handleChange(event)}
            value={customer.email}
            className="form-customer-input"
            type="text"
            name="email"
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeCustomer: (customer) => dispatch(removeCustomer(customer)),
});

const mapStateToProps = (state) => ({
  user: state.users.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormCustomerList);
