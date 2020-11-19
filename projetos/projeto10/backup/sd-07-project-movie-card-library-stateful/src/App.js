import React from 'react';
import AddMovie from './components/AddMovie'
import './App.css';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <AddMovie />
    </div>
  );
}

export default App;
