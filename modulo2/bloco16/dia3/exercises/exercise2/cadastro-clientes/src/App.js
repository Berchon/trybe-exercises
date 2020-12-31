import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomerBase from './pages/CustomerBase';
import CustomerList from './pages/CustomerList';
import NotLoggedIn from './pages/NotLoggedIn';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
        // <header className="App-header"></header>

        <BrowserRouter>
          <Switch>
            <Route path="/CustomerBase" component={CustomerBase} />
            <Route path="/CustomerList" component={CustomerList} />
            <Route path="/notLoggedIn" component={NotLoggedIn} />
            <Route path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route path="/" component={NotFound} />
          </Switch>
        </BrowserRouter>
      // </div>
    );
  }
}

export default App;
