import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    // const id = 1;
    const { id, name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
          <p><Link to={`/details/${id}`} pokemon={this.props.pokemon}>MORE DETAILS</Link></p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    );
  }
}

export default Pokemon;