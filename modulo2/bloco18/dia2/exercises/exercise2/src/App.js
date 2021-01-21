import React from 'react';
import TrafficSignal from './TrafficSignal';
import Cars from './Cars';
import './App.css';

function App() {
  return (
    <div className="container">
      <Cars />
      <TrafficSignal />
    </div>
  );
}

export default App;
