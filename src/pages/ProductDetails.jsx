import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchProductById } from '../services/api';

class ProductDetails extends Component {
  state = {
    title: '',
    thumbnail: '',
    price: 0,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const resultDetails = await fetchProductById(id);
    const { title, thumbnail, price } = resultDetails;
    return this.setState({ title, thumbnail, price });
  }

  render() {
    const { title, thumbnail, price } = this.state;
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
