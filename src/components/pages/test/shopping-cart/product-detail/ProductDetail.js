import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";

import { addCartItem } from '../redux/actions';

import "./ProductDetail.scss";

function ProductDetail({ selectedProduct, addCartItem }) {

    // console.log(selectedProduct);


    if (!selectedProduct) {
        return (
            <div className="product-detail--empty">Select a Product!</div>
        );
    }

    return (
        <div className="product-catalog__detail" >
            <div className="product-detail" data-product={selectedProduct.id}>
                <img className="product-detail__img" src={selectedProduct.img} />
                <p className="product-detail__name">Name: {selectedProduct.name}</p>
                <p className="product-detail__price">Price: {selectedProduct.price}</p>

                <button className="product-detail__addToCart" onClick={() => addCartItem(selectedProduct)}>Add to Cart</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // console.log(state);

    return { selectedProduct: state.selectedProduct };
};

export default connect(mapStateToProps, { addCartItem })(ProductDetail);