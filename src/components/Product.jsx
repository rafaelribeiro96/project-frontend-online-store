import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
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
