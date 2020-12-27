import React from 'react'
import { connect } from 'react-redux'

class Player extends React.Component {
  render() {
    const { category, movie } = this.props;
    return (
      <div>
        <h1>Categoria: {category.name}</h1>
        <h2>Filme: {movie.title}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  category: state.movieReducer.selectedCategory,
  movie: state.movieReducer.selectedMovie
});

export default connect(mapStateToProps)(Player)