import React from 'react';

class Cart extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="cart">
                <div className="cart__header">
                    <div className="cart__header-main">
                        <i className="cart__header-main-icon material-icons">shopping_cart</i>
                        <h3 className="cart__header-main-title">Your Order</h3>
                    </div>
                    <p className="cart__header-close cart__header-close--visible" onClick={this.props.toggleCartModal}>
                        <i className="cart__header-close-icon fa fa-times"></i>
                    </p>
                </div>

                <div className="cart__empty-template" style={{ display: 'block' }}>
                    <p>Your shopping cart is empty!</p>
                </div>

                <div className="cart__items" style={{ display: 'none' }}></div>

                <div className="cart__pricing" style={{ display: 'none' }}>
                    <div className="cart__pricing-box cart__pricing-box-subtotal">
                        <p className="cart__pricing-box__title">Subtotal</p>
                        <p className="cart__pricing-box__value">95.00 EGP</p>
                    </div>
                    <div className="cart__pricing-box cart__pricing-box-delivery">
                        <p className="cart__pricing-box__title">Delivery fee</p>
                        <p className="cart__pricing-box__value">10.00 EGP</p>
                    </div>
                    <div className="cart__pricing-box cart__pricing-box-total">
                        <p className="cart__pricing-box__title">Total</p>
                        <p className="cart__pricing-box__value">105.00 EGP</p>
                    </div>
                </div>

                <div className="cart__submit" style={{ display: 'none' }}>
                    <button className="cart__submit-btn">Place Order</button>
                </div>
            </section>
        );
    }
}

export default Cart;