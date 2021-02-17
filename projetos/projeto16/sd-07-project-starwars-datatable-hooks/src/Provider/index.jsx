import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RequestData from '../services/RequestData';
import StarWarsContext from '../context';

const Provider = ({ children }) => {
  const filterInitial = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  };
  const [data, setData] = useState();
  const [filters, setFilters] = useState(filterInitial);

  const changeOrder = (column, sort) => {
    const newOrder = {
      ...filters,
      order: { column, sort },
    };
    setFilters(newOrder);
  };

  const changeFiltersName = (name) => {
    const newFilter = {
      ...filters,
      filterByName: { name },
    };
    setFilters(newFilter);
  };

  const addFiltersNumerics = (objFilter) => {
    const { filterByNumericValues } = filters;
    const dontRemove = 0;
    const numberOfFilters = filterByNumericValues.length;
    filterByNumericValues.splice(numberOfFilters, dontRemove, objFilter);
    const newFilter = {
      ...filters,
      filterByNumericValues,
    };
    setFilters(newFilter);
  };

  const removeFiltersNumerics = (index) => {
    const { filterByNumericValues } = filters;
    filterByNumericValues.splice(index, 1);
    const newFilter = {
      ...filters,
      filterByNumericValues,
    };
    setFilters(newFilter);
  };

  const callRequestData = async () => {
    const { results } = await RequestData();
    setData(results);
  };

  useEffect(() => {
    callRequestData();
  }, []);

  const context = {
    data,
    filters,
    changeFiltersName,
    addFiltersNumerics,
    removeFiltersNumerics,
    changeOrder,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
