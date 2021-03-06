import React from 'react';
import { cartType } from '../../types';
import { CartItem } from '../CartItem';
import './Cart.scss';

export const Cart = ({ cartItems, clearCart, deleteFromCart, addToCart }) => (
  <div className="cart-block__cart cart">
    <div className="cart__header">
      {
        (cartItems.length === 0)
          ? (<div>Cart is empty</div>)
          : (
            <div>{`You have ${cartItems.length} items in the cart`}</div>
          )
      }
    </div>

    <div className="cart__body">
      <ul className="cart__cart-list cart-list">
        {cartItems.map(item => (
          <CartItem
            item={item}
            deleteFromCart={deleteFromCart}
            addToCart={addToCart}
            key={item.id}
          />
        ))}
      </ul>
    </div>

    <div className="cart__total">
      { ` Total: $
        ${cartItems.reduce((acc, cur) => acc + cur.total, 0)}
      `}
    </div>

    <div className="cart__menu menu">
      {
        (cartItems.length === 0)
          ? (<></>)
          : (
            <button
              type="button"
              onClick={clearCart}
              className="menu__button button"
            >
              Clear Cart
            </button>
          )
      }
    </div>
  </div>
);

Cart.propTypes = cartType;
