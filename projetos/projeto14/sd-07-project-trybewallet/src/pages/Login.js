import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      validate: true,
    };
    this.handleInputChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  validate() {
    const { email, password } = this.state;
    const minLength = 5;
    const validPassword = password.length > minLength;
    const bool = !(email.match(/\S+@\S+\.\S+/) && validPassword);
    this.setState({ validate: bool });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value }, this.validate);
  }

  render() {
    const { email, password, validate } = this.state;
    const { addEmail } = this.props;
    return (
      <div className="login-container">
        <div className="login-content">
          <input
            value={ email }
            name="email"
            onChange={ (event) => this.handleChange(event) }
            data-testid="email-input"
            type="email"
          />
          <input
            value={ password }
            name="password"
            onChange={ (event) => this.handleChange(event) }
            data-testid="password-input"
            type="text"
          />
          <Link to="/carteira">
            <button
              type="button"
              disabled={ validate }
              onClick={ () => addEmail(email) }
            >
              Entrar
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (email) => dispatch(login(email)),
});

Login.propTypes = {
  addEmail: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
