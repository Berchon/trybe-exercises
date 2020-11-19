import React, { Component } from 'react';

class AddMovie extends Component {
  
  constructor() {
    super();
    this.handleState = this.handleState.bind(this);
    this.saveMovie = this.saveMovie.bind(this);
    
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating :0,
      genre: 'action',
    };
  }

  handleState(event) {
    const { name, value } = event.target;
    this.setState({[name]: value});
  }

  saveMovie() {
    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating :0,
      genre: 'action',
    };
  }

  render() {
    const { onClick } = this.props;
    return (
      <div>
        <form data-testid='add-movie-form'>
          <label data-testid="title-input-label">Título</label>
          <input name="title" type="text" value={this.state.title} data-testid="title-input" onChange={this.handleState}></input>

          <label data-testid="subtitle-input-label">Subtítulo</label>
          <input name="subtitle" type="text" value={this.state.subtitle} data-testid="subtitle-input" onChange={this.handleState}></input>

          <label data-testid="image-input-label">Imagem</label>
          <input type="text" value={this.state.imagePath} name='imagePath' onChange={this.handleState} data-testid="image-input"></input>

          <label data-testid="storyline-input-label">Sinopse</label>
          <textarea value={this.state.storyline} data-testid="storyline-input" name='storyline' onChange={this.handleState}></textarea>

          <label data-testid="rating-input-label">Avaliação</label>
          <input name="rating" type="number" value={this.state.rating} data-testid="rating-input" onChange={this.handleState}></input>

          <label data-testid="genre-input-label">Gênero</label>
          <select name="genre" value={this.state.genre} data-testid="genre-input-label" onChange={this.handleState}>
            <option value="action" data-testid="genre-option">Ação</option>
            <option value="comedy" data-testid="genre-option">Comédia</option>
            <option value="thriller" data-testid="genre-option">Suspense</option>
          </select>

          <button data-testid="send-button" onClick={this.saveMovie}>Adicionar filme</button>
        </form>
      </div>
    )
  }
}

export default AddMovie;