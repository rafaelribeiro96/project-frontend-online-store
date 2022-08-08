import React, { Component } from 'react';
import propTypes from 'prop-types';

class Product extends Component {
  render() {
    const { name, img, price } = this.props;
    return (
      <div data-testid="product">
        <p>{ name }</p>
        <img alt="imagem" src={ img } />
        <p>{ price }</p>
      </div>
    );
  }
}

Product.propTypes = {
  name: propTypes.string.isRequired,
  img: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
};

export default Product;
