import React, { Component } from 'react';
// import pokemons from './data.js';

class Details extends Component {

  render() {
    const pokemons = this.props.pokemons;
    const id = this.props.match.params.id;
    const pokemon = pokemons.filter(pokemon => pokemon.id === parseInt(id));
    const { name, type, averageWeight, summary, foundAt } = pokemon[0];
    return(
      <div>
        <p>{name}</p>
        <p>{type}</p>
        <p>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
        <p>{summary}</p>
        {foundAt.map((location, index) => {
          return (<div key={index}>
            <p >{location.location}</p>
            <img src={location.map} alt="Location" />
          </div>
        )})}

      </div>
      
    )
  }
}

export default Details;