import React from 'react';
import Provider from './Provider'
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';

function App() {
  return (
    <div className="container">
      <Provider>
        <Cars />
        <TrafficSignal />
      </Provider>
    </div>
  );
}

export default App;
