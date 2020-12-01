import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Home </Link>
        <Link to="/"> About </Link>
        <Link to="/"> Favorite Pokémons </Link>
      </nav>
    )
  }
}

export default Nav;