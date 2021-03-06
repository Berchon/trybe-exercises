import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';
import './MovieList.css';

class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      movieList: false,
    };
  }

  componentDidMount() {
    this.get();
  }

  async get() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies,
      movieList: true,
    });
  }

  render() {
    const { movies, movieList } = this.state;

    // Render Loading here if the request is still happening

    return movieList ? (
      <div data-testid="movie-list">
        <div className="cards">
          {movies.map((movie) => (
            <MovieCard key={movie.title} movie={movie} />
          ))}
        </div>
        <Link className="button" to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default MovieList;
