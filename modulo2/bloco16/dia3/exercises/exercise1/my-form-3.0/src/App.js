import React, { Component } from 'react';
import Form from './components/Form.jsx';
import ListForm from './components/ListForm';
import './App.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  alert: false,
};

class App extends Component {
  constructor() {
    super();
    this.saveState = this.saveState.bind(this);
    this.clearState = this.clearState.bind(this);
    this.state = INITIAL_STATE;
  }

  saveState(newState) {
    this.setState(newState);
  }

  clearState() {
    this.setState(INITIAL_STATE);
  }

  render() {
    return (
      <div className="App">
        <div className="App-background">
          <div className="App-content">
            <Form saveState={this.saveState} clearState={this.clearState} />
          </div>
        </div>
        <ListForm data={this.state} />
      </div>
    );
  }
}

export default App;
