import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cart extends Component {
  render() {
    console.log('salve');

    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria
        </p>
        <Link to="/Cart">
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            Btn
          </button>
        </Link>
      </div>
    );
  }
}
