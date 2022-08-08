import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
state = {
  categoriesArray: [],
}

componentDidMount() {
  this.setState(async () => {
    const saveCategories = await getCategories();
    return this.setState({ categoriesArray: saveCategories });
  });
}

render() {
  const { categoriesArray } = this.state;
  return (

    <form>
      <h3>Categorias</h3>
      <ul>
        {categoriesArray.map((category) => (
          <li key={ category.id }>
            <button
              type="submit"
              data-testid="category"
              id={ category.id }
            >
              { category.name }
            </button>
          </li>
        ))}
      </ul>
    </form>
  );
}
}
