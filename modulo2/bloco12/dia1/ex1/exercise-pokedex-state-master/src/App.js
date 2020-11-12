import React, { Component } from 'react';
import './App.css';
import pokemons from './data';
// import Pokedex from './Pokedex';
import Pokemon from './Pokemon';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
    }
  }

  handleClick = () => {
    this.setState((lastState, _props) => ({
      pokemonIndex: (lastState.pokemonIndex === (pokemons.length - 1)) ? 0 : (lastState.pokemonIndex + 1)
    }))
  }

  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        {/* <Pokedex pokemons={pokemons} /> */}
        <Pokemon pokemon={pokemons[this.state.pokemonIndex]} />
        <button onClick={this.handleClick}>Próximo Pokemon</button>
      </div>
    );
  }
}

export default App;