import React, { Component } from 'react';
import logo1 from './images/loading-external-1.svg';
import logo2 from './images/loading-external-2.svg';
import logo3 from './images/loading-external-3.svg';
import logo4 from './images/loading-external-4.svg';
import logo from './images/loading-logo.svg';
import './style.css';

class Loading extends Component {
  render() {
    return (
      <section className="loading-container">
        <img className="loading-logo loading-logo-1" src={ logo1 } alt="Loading" />
        <img className="loading-logo loading-logo-2" src={ logo2 } alt="Loading" />
        <img className="loading-logo loading-logo-3" src={ logo3 } alt="Loading" />
        <img className="loading-logo loading-logo-4" src={ logo4 } alt="Loading" />
        <img className="loading-logo loading-logo-5" src={ logo } alt="Loading" />
      </section>
    );
  }
}

export default Loading;
