import React, { useState } from 'react';
import Context from './Context';

function Provider({ children }) {
  const initialState = {
    red: false,
    blue: false,
    yellow: false,
  }

  const [cars, setColorCar] = useState(initialState);
  const [signalColor, setColorSignal] = useState('red');

  const moveCar = (car, side) => {
    setColorCar({...cars, [car]: side, });
  }

  const changeSignal = (color) => {
    setColorSignal(color);
  }

  const context = {
    cars, signalColor, moveCar, changeSignal,
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

export default Provider;