import React, { Component } from 'react';
import Pokemon from './pokemon.js';
import './pokedex.css';

class Pokedex extends Component {
    render() {
      return(
        <div className = 'content'>
            {this.props.value.map(elements => <Pokemon value = {elements} />)}
        </div>
      );
    }
};

export default Pokedex;