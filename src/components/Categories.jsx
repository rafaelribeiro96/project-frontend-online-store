import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, showCategories } from '../services/api';

export default class Categories extends Component {
  state = {
    categoriesArray: [],
    productByCategory: [],
  }

  componentDidMount() {
    this.setState(async () => {
      const saveCategories = await getCategories();
      return this.setState({ categoriesArray: saveCategories });
    });
  }

  handleClick = async ({ target }) => {
    const { id } = target;
    const categorieId = await showCategories(id);
    const { results } = await categorieId;
    return this.setState({ productByCategory: results });
  }

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
    const { categoriesArray, productByCategory } = this.state;
    return (

      <form>
        <h3>Categorias</h3>
        <ul>
          {categoriesArray.map((category) => (
            <li key={ category.id }>
              <button
                type="button"
                data-testid="category"
                id={ category.id }
                onClick={ this.handleClick }
              >
                {category.name}
              </button>
            </li>
          ))}
        </ul>
        {productByCategory.map(({ id, title, thumbnail, price }) => (
          <li
            key={ id }
            data-testid="product"
          >
            <p>{ title }</p>
            <img alt="imagem" src={ thumbnail } />
            <p>{ `Preço: ${price}` }</p>
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
          </li>
        ))}
      </form>
    );
  }
}
