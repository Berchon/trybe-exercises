import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1> Home </h1>
    <h2> My awesome Home component </h2>
    <p><Link to="/">Home</Link></p>
    <p><Link to="/About">About</Link></p>
    <p><Link to="/Users">Users</Link></p>
    <p><Link to="/StrictAccess">Strict Access</Link></p>
  </div>
);

export default Home;