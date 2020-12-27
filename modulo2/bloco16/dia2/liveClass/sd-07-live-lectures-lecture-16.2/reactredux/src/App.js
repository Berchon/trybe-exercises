import React from 'react';
import { Provider } from 'react-redux';
import Sidebar from './components/Sidebar'
import Player from './components/Player';
import categories from './data';
import store from './store';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: [...categories]
    }
  }

  render() {
    const { categories } = this.state
    return (
      <div className="App">
        <Provider store={store}>
          <Player />
          <Sidebar />
        </Provider>
      </div>
    );
  }
};

export default App;