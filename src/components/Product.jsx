import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  addItemtoCart = async (id, title, thumbnail, price) => {
    const items = { id, title, thumbnail, price, quantity: 1 };
    const cart = JSON.parse(localStorage.getItem('cart'));
    let newCart = [];
    if (cart) {
      newCart = [items, ...cart];
      console.log(newCart);
      if (cart.some((item) => item.id === items.id)) {
        newCart = cart;
        newCart.forEach((item, i) => {
          if (item.id === items.id) newCart[i].quantity += 1;
        });
      }
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else localStorage.setItem('cart', JSON.stringify([items]));
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
          onClick={ () => this.addItemtoCart(id, title, thumbnail, price) }
        >
          Add to Cart
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
