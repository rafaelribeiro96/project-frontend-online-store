import React, { Component } from 'react';
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
    console.log(id);
    const categorieId = await showCategories(id);
    const { results } = await categorieId;
    return this.setState({ productByCategory: results });
  }

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
        {console.log(productByCategory)}
        {productByCategory.map(({ id, title, thumbnail, price }) => (
          <li
            key={ id }
            data-testid="product"
          >
            <p>{ title }</p>
            <img alt="imagem" src={ thumbnail } />
            <p>{ price }</p>
          </li>
        ))}
      </form>
    );
  }
}
