import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: 0,
    id: '',
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const resultDetails = await fetchProductById(id);
    const { title, thumbnail, price } = resultDetails;
    return this.setState({ title, thumbnail, price });
  }

  addItemtoCart = async (id, title, thumbnail, price) => {
    console.log('botão clicado');
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
    const { title, thumbnail, price, id } = this.state;
    return (
      <div>
        <p
          data-testid="product-detail-name"
        >
          { title }
        </p>
        <img
          data-testid="product-detail-image"
          src={ thumbnail }
          alt={ title }
        />

        <p data-testid="product-detail-price">{ price }</p>

        <Link
          to="/Cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addItemtoCart(id, title, thumbnail, price) }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired }) }).isRequired,
};
export default ProductDetails;
