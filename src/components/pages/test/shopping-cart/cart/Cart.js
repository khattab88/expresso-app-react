import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { updateCartItemCount } from '../redux/actions';

import "./Cart.scss";

function Cart({ cart, updateCartItemCount }) {

    console.log(cart);

    const onUpdateCount = (id, count) => {
        let itemCount = (cart.find(item => item.id === id).count) + count;

        if(itemCount > 0) {
            updateCartItemCount(id, count);
        }
    }

    if(cart.length === 0) {
        return(
            <section className="cart cart--empty">
                <h2 className="cart__title">Cart</h2>
                <p className="cart__msg">Your cart is empty!</p>
            </section>
        );
    }

    return (
        <section className="cart">
            <h2 className="cart__title">Cart</h2>

            <div className="cart__box">
                {
                    cart.map(cartItem =>
                        <article className="cart-item" data-id={cartItem.id} key={cartItem.id}>
                            <div className="cart-item__content">
                                <p className="cart-item__name">{cartItem.name}</p>
                                <p className="cart-item__price">price: {cartItem.price}</p>
                            </div>
                            <div className="cart-controls">
                                <button className="cart-controls__btn" 
                                        onClick={() => onUpdateCount(cartItem.id ,-1)}
                                > -
                                </button>
                                <p className="cart-controls__count">{cartItem.count}</p>
                                <button className="cart-controls__btn" 
                                        onClick={() => onUpdateCount(cartItem.id, 1)}
                                > +
                                </button>
                            </div>
                        </article>
                    )
                }
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.cart);

    return { cart: state.cart };
};

export default connect(mapStateToProps, { updateCartItemCount })(Cart);