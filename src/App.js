import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Home from './pages/Home';
import './App.css';
import ProductList from './components/ProductList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route exact path="/Cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
