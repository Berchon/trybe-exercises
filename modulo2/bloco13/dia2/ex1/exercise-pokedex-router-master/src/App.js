import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Details from './Details';
import Nav from './nav';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <BrowserRouter>
      <Nav />
        <Switch>
          <Route
            exact path="/"
            render={(props) => <Pokedex {...props} pokemons={pokemons} />}
          />
          {/* <Route path="/" component={Nav} /> */}
          <Route path="/details/:id" render={(props) => <Details {...props} pokemons={pokemons}/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
