import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as TodoActions from '../actions';
import './filters.css';

class Filters extends Component {
  render() {
    return(
      <div className="filter-container">
        <button onClick={() => this.props.filter('all')} className="filters filters-all">Mostrar todos</button>
        <button onClick={() => this.props.filter('todo')} className="filters filters-todo">Por fazer</button>
        <button onClick={() => this.props.filter('doing')} className="filters filters-doing">Fazendo</button>
        <button onClick={() => this.props.filter('done')} className="filters filters-done">Feito</button>
        <button onClick={() => this.props.filter('erase')} className="filters filters-erase">Excluídos</button>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  filter: (filter) => dispatch(TodoActions.filter(filter)),
});

export default connect(null, mapDispatchToProps)(Filters);