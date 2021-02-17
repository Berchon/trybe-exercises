import React, { useState, useContext, useEffect } from 'react';
import context from '../../context';
import './style.css';

const Order = () => {
  const firstCaracter = 0;
  const { data, changeOrder } = useContext(context);
  const [column, setColumn] = useState('');
  const [isAsc, setIsAsc] = useState(true);
  let arraySelectColumns = [];

  useEffect(() => {
    setColumn(arraySelectColumns[0]);
  }, [arraySelectColumns]);

  if (!data) {
    return false;
  }

  arraySelectColumns = Object.keys((data) ? data[0] : [])
    .filter((item) => (item !== 'residents'))
    .map((item) => (item));

  const handleClick = () => {
    const order = (isAsc) ? 'ASC' : 'DESC';
    changeOrder(column, order);
  };

  return (
    <div className="order-container">
      <select
        className="order-content order-select"
        id="planetInformation1"
        data-testid="column-sort"
        value={ column }
        onChange={ (event) => setColumn(event.target.value) }
      >
        {
          arraySelectColumns.map((element) => (
            <option key={ element } value={ element }>
              {
                element.replace('_', ' ')
                  .replace(
                    element.charAt(firstCaracter),
                    element.charAt(firstCaracter).toUpperCase(),
                  )
              }
            </option>
          ))
        }
      </select>
      <label
        className="order-content"
        htmlFor="asc"
      >
        <span>Crescente</span>
        <input
          className="order-checkbox"
          type="radio"
          id="asc"
          name="asc"
          value={ isAsc }
          data-testid="column-sort-input-asc"
          onChange={ () => setIsAsc(true) }
          checked={ isAsc }
        />
      </label>
      <label
        className="order-content"
        htmlFor="desc"
      >
        <span>Decrescente</span>
        <input
          className="order-checkbox"
          type="radio"
          id="desc"
          name="desc"
          value={ !isAsc }
          data-testid="column-sort-input-desc"
          onChange={ () => setIsAsc(false) }
          checked={ !isAsc }
        />
      </label>
      <button
        className="order-content order-button"
        type="button"
        data-testid="column-sort-button"
        onClick={ handleClick }
        onKeyPress={ handleClick }
      >
        Aplicar
      </button>
    </div>
  );
};

export default Order;
