import React from 'react'
import { connect } from 'react-redux'
import * as MovieActions from '../actions/movieAction';

class Sidebar extends React.Component {
  render() {
    const { categorias, selectMovie } = this.props

    return (
      <aside>
        {
          categorias.map(category => (
            <div key={category.id}>
              <h3>{category.name}</h3>
              <ul>
                {
                  category.movies.map(movie => (
                    <li key={movie.id}>{movie.title} was released in {movie.released}<button onClick={() => selectMovie(category, movie)}>Select</button></li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({
  categorias: state.movieReducer.categories
})

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(MovieActions.selectMovie(category, movie))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)