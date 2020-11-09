import React, { Component } from 'react';
import './pokemon.css';

class Pokemon extends Component {
    render() {
      const {name, type, averageWeight, image} = this.props.value
      return(
          <div className = 'content1'>
              <div className = 'content-text'>
                <p>{name}</p>
                <p>{type}</p>
                <p>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</p>
              </div>
              <div className = 'content-img'>
                <img src = {image} alt = 'Imagens de Pokemons'/>
              </div>
          </div>
      );
    }
};

export default Pokemon;