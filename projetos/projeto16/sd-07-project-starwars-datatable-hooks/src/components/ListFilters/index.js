import React, { useContext } from 'react';
import context from '../../context';
import './style.css';

const ListFilters = () => {
  const firstCaracter = 0;
  const { filters, removeFiltersNumerics } = useContext(context);
  const { filterByNumericValues } = filters;

  const changeCaracters = (str) => {
    const text = str.replace('_', ' ')
      .replace(str[firstCaracter], str[firstCaracter].toUpperCase());
    return (text);
  };

  return (
    filterByNumericValues.map((item, index) => (
      <div className="list-container" key={ index } data-testid="filter">
        <div className="list-top-container">
          <div className="list-space-content">Filtros</div>
          <div className="list-button-content">
            <button
              className="list-button"
              type="button"
              onClick={ () => removeFiltersNumerics(index) }
              onKeyPress={ removeFiltersNumerics }
            >
              X
            </button>
          </div>
        </div>
        <div className="list-text-content">
          <span>{ changeCaracters(item.column) }</span>
          <span>{` ${item.comparison} `}</span>
          <span>{item.value}</span>
        </div>
      </div>
    ))
  );
};

export default ListFilters;
