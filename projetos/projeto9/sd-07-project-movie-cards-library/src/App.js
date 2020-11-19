import React from 'react';
import Header from './components/Header.jsx';
import MovieList from './components/MovieList.jsx';
import './App.css';
import movies from './data.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
