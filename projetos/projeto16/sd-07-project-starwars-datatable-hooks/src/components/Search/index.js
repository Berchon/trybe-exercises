import React, { useContext } from 'react';
import context from '../../context';
import './style.css';

const Search = () => {
  const { filters, changeFiltersName } = useContext(context);
  const { name } = filters.filterByName;
  return (
    <div className="search-container">
      {/* <label htmlFor="search"> */}
      <input
        className="search-text"
        type="text"
        id="search"
        placeholder="Digite alguma experssão para filtrar por nome do planeta"
        data-testid="name-filter"
        value={ name }
        onChange={ (event) => changeFiltersName(event.target.value) }
      />
      {/* </label> */}
      <span className="search-icon">Icon</span>
    </div>
  );
};

export default Search;
