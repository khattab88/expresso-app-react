import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import "./ProductCatalog.scss";

import ProductDetail from "../product-detail/ProductDetail";

import { selectProduct } from '../redux/actions';

function ProductCatalog(props) {

    return (
        <section className="product-catalog">
            <h2 className="product-catalog__title">Product Catalog</h2>

            <div className="product-catalog__box">
                <div className="product-catalog__list">
                    {
                        props.products.map(product => {
                            return (
                                <article className="product-item" data-id={product.id} key={product.id}>
                                    <div className="product-item__content">
                                        <p className="product-item__name">{product.name}</p>
                                        <p className="product-item__price">Price: {product.price}</p>
                                    </div>
                                    <button className="product-item__btn" onClick={() => props.selectProduct(product)}>Select</button>
                                </article>
                            );
                        })
                    }
                </div>
                
                <ProductDetail />

            </div>
        </section>
    );
}

const mapStateToProps = state => {
    // console.log(state);

    return { products: state.products };
};

export default connect(mapStateToProps, { selectProduct })(ProductCatalog);