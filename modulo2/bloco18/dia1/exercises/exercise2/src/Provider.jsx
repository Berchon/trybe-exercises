import React, { Component } from 'react';
import Context from './Context';

class Provider extends Component {
  constructor()  {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
      signalColor: 'red',
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({ ...this.state, [car]: side });
  }

  changeSignal(color) {
    this.setState({ ...this.state, signalColor: color });
  }

  render() {
    const { children } = this.props;
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;