import React, { Component } from 'react';
import Context from './Context'

class Provider extends Component {
  constructor()  {
    super();
    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }
    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(car, side) {
    // this.setState({ [car]: side });
    this.setState({ ...this.state, [car]: side });
  }
  
  render() {
    const { children } = this.props;
    const context = { ...this.state, moveCar: this.moveCar }
    return (
      <Context.Provider value={context}>
        {children}
      </Context.Provider>
    );
  }
}

export default Provider;
