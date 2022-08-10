import React, { Component } from 'react';

export default class Cart extends Component {
  render() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    function buildCart() {
      if (cart && cart.length > 0) {
        return cart.map((actual) => {
          const { id, title, thumbnail, price, quantity } = actual;
          return (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <img src={ thumbnail } alt={ id } />
              <p>{price}</p>
              <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            </div>
          );
        });
      }
      return (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </p>
      );
    }

    return (
      <div>
        { buildCart() }
      </div>
    );
  }
}
