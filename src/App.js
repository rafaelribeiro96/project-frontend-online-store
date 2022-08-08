import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" Component={ Home } />
          <Route exact path="/Cart" Component={ Cart } />
        </Switch>
      </div>
    );
  }
}
