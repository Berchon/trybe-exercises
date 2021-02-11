import React, { useEffect, useState, useContext } from 'react';
import context from '../../context';
import './style.css';

const Filter = () => {
  const firstCaracter = 0;
  const arrayColumns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const { filters, addFiltersNumerics } = useContext(context);
  const { filterByNumericValues } = filters;

  const updateSelectColumns = () => {
    const columnsInsered = filterByNumericValues.map((filter) => filter.column);
    return arrayColumns.filter((item) => (!columnsInsered.includes(item)));
  };

  let arraySelectColumns = updateSelectColumns();

  const initialFilters = {
    column: arraySelectColumns[0],
    comparison: 'maior que',
    value: '0',
  };
  const [filter, setFilterForms] = useState(initialFilters);
  const { column, comparison, value } = filter;
  const filterForms = (key, val) => {
    setFilterForms({ ...filter, [key]: val });
  };
  useEffect(() => {
    filterForms('comparison', 'maior que');
    filterForms('value', '0');
    filterForms('column', arraySelectColumns[0]);
  }, arraySelectColumns);

  const handleClick = () => {
    addFiltersNumerics({ column, comparison, value });
    arraySelectColumns = updateSelectColumns();
  };

  return (
    <div className="filter-container">
      {/* <label htmlFor="planetInformation"> */}
      <select
        className="filter-content filter-select filter-column"
        id="planetInformation"
        data-testid="column-filter"
        value={ column }
        onChange={ (event) => filterForms('column', event.target.value) }
        disabled={ (!arraySelectColumns.length) }
      >
        {
          arraySelectColumns.map((element) => (
            <option key={ element } value={ element }>
              {
                element
                  .replace('_', ' ')
                  .replace(
                    element.charAt(firstCaracter),
                    element.charAt(firstCaracter).toUpperCase(),
                  )
              }
            </option>
          ))
        }
      </select>
      {/* </label> */}
      {/* <label htmlFor="relationalOperator"> */}
      <select
        className="filter-content filter-select filter-comparison"
        id="relationalOperator"
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ (event) => filterForms('comparison', event.target.value) }
        disabled={ (!arraySelectColumns.length) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      {/* </label> */}

      {/* <label htmlFor="valueFilter"> */}
      <input
        className="filter-content filter-value"
        type="number"
        id="valueFilter"
        data-testid="value-filter"
        value={ value }
        onChange={ (event) => filterForms('value', event.target.value) }
        disabled={ (!arraySelectColumns.length) }
      />
      {/* </label> */}
      <button
        className="filter-content filter-button"
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
        onKeyPress={ handleClick }
        disabled={ (!arraySelectColumns.length) }
      >
        Aplicar
      </button>
    </div>
  );
};

export default Filter;
