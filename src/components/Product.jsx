import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  addItemToCart = async (id, title, thumbnail, price) => {
    const cartItem = { id, title, thumbnail, price, quantity: 1 };
    const actualCart = JSON.parse(localStorage.getItem('cart'));
    let newCart = [];
    if (actualCart) {
      newCart = [cartItem, ...actualCart];
      console.log(newCart);
      if (actualCart.some((item) => item.id === cartItem.id)) {
        newCart = actualCart;
        newCart.forEach((item, i) => {
          if (item.id === cartItem.id) newCart[i].quantity += 1;
        });
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else localStorage.setItem('cart', JSON.stringify([cartItem]));
  };

  render() {
    const { name, img, price, id } = this.props;
    return (
      <div data-testid="product">
        <p>{ name }</p>
        <img alt="imagem" src={ img } />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ `/ProductDetails/${id}` }
        >
          Detalhes do Produto

        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addItemToCart(id, title, thumbnail, price) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Product.propTypes = {
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default Product;
