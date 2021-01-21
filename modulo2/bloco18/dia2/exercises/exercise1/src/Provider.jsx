import React, { useState } from 'react';
import Context from './Context'

function Provider({ children }) {
  const initialState = {
    red: false,
    blue: false,
    yellow: false,
  }
  const [cars, setColor] = useState(initialState);

  const moveCar = (car, side) => {
    setColor({...cars, [car]: side, });
  }
  const context = { cars, moveCar };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
