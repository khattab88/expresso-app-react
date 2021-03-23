import React, { useState, useEffect } from 'react';

import "./ShoppingCart.scss";

import ProductCatalog from './product-catalog/ProductCatalog';
import ProductDetail from './product-detail/ProductDetail';
import Cart from './cart/Cart';

function ShoppingCart(props) {
    return(
        <section className="shopping-cart">
            <h1 className="shopping-cart__title">Shopping Cart</h1>

            <ProductCatalog />

            <Cart/>

        </section>
    );
}

export default ShoppingCart;