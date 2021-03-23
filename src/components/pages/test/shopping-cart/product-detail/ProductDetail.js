import React, { useState, useEffect } from 'react';

import { connect } from "react-redux";

import "./ProductDetail.scss";

function ProductDetail({ selectedProduct }) {

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

                <button className="product-detail__addToCart">Add to Cart</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return { selectedProduct: state.selectedProduct };
};

export default connect(mapStateToProps)(ProductDetail);