import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}
