import React, { Component } from 'react';

export default class Cart extends Component {
  state = {
    modifyQuantity: 0,
    cart: [],
  }

  componentDidMount() {
    this.openPage();
  }

  openPage = () => {
    const cart2 = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      cart: cart2,
    });
    console.log(cart2);
  };

  removeCartItem = (target) => target.parentNode.parentNode.remove();

  addProduct = () => {
    this.setState(({ modifyQuantity: prevQuantity }) => (
      {
        modifyQuantity: prevQuantity + 1,
      }
    ));
    console.log('adição');
  }

  subtractProduct = () => {
    const { modifyQuantity } = this.state;
    if (modifyQuantity > 0) {
      this.setState(({ modifyQuantity: prevQuantity }) => (
        {
          modifyQuantity: prevQuantity - 1,
        }
      ));
    }
    console.log('subtração');
  }

  /* render() {
    const { cart, modifyQuantity } = this.state;
    const { addProduct, subtractProduct, removeCartItem } = this;
    const storageCart = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        {storageCart.length === 0
        && (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>)}
        { cart.map((actual) => {
          const { id, title, thumbnail } = actual;
          let { quantity, price } = actual;
          console.log(price);
          const quantidadeAtual = quantity;
          quantity = (quantidadeAtual + modifyQuantity);
          const priceNovo = price;
          price = (priceNovo * quantity);

          return (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <img src={ thumbnail } alt={ id } />
              <p>{`Preço: R$ ${price}`}</p>

              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ ({ target }) => subtractProduct(target) }
              >
                -
              </button>

              <p id="quant" data-testid="shopping-cart-product-quantity">
                Quantidade produto
                {quantity}
              </p>
              <p>
                {' '}
                Modify Quantity
                {' '}
                { modifyQuantity }
              </p>
              <button
                data-testid="product-increase-quantity"
                type="button"
                onClick={ ({ target }) => addProduct(target) }
              >
                +
              </button>

              <br />
              <button
                type="button"
                data-testid="remove-product"
                onClick={ ({ target }) => removeCartItem(target) }
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    );
  } */

  render() {
    const { modifyQuantity, cart } = this.state;
    const { addProduct, subtractProduct, removeCartItem } = this;
    function buildCart() {
      if (cart && cart.length > 0) {
        return cart.map((actual) => {
          console.log(cart);
          const { id, title, thumbnail } = actual;
          let { quantity, price } = actual;
          const quantidadeAtual = quantity;
          quantity = (quantidadeAtual + modifyQuantity);
          const priceNovo = price;
          price = (priceNovo * quantity);
          return (
            <div id={ id } key={ id }>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <img src={ thumbnail } alt={ id } />
              <p>{price}</p>
              <p data-testid="shopping-cart-product-quantity">
                { quantity }
              </p>
              <div className="cart-product-quantity-container">

                <button
                  type="button"
                  data-testid="product-decrease-quantity"
                  onClick={ ({ target }) => subtractProduct(target) }
                >
                  -
                </button>

                <button
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ ({ target }) => addProduct(target) }
                >
                  +
                </button>

                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={ ({ target }) => removeCartItem(target) }
                >
                  x
                </button>
              </div>
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
