import React from 'react';
import Provider from './Provider';
import {
  Table,
  Search,
  Filter,
  ListFilters,
  Order,
  StarBackground,
  GlassEffect,
  Loading,
} from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarBackground />
      <div className="new-position">
        <Provider>
          <h2 className="title">stars wars</h2>
          <GlassEffect>
            <Search />
            <Filter />
            <div className="list-filters">
              <ListFilters />
            </div>
            <Order />
          </GlassEffect>
          <Table />
        </Provider>
        <Loading />
      </div>
    </div>
  );
}

export default App;
