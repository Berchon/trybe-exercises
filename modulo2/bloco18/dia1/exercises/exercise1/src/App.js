import React, { Component } from 'react';
import Provider from './Provider';
// import CarContext from './Context';
import Cars from './Cars';
import './App.css';

// const CarContext = createContext(1);

class App extends Component {
  render() {
    
    return (
      <Provider>
        <Cars />
      </Provider>
    );
  }
}

export default App;
