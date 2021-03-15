import React from 'react';

import CartItem from './cart-item/CartItem';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItemSubTotals: [],
            subtotal: 0
        };

        this.renderCartItems = this.renderCartItems.bind(this);
        this.onUpdateItemSubTotal = this.onUpdateItemSubTotal.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        // console.log(this.props);
    }

    componentDidUpdate() {
        // console.log(this.props);
    }

    onUpdateItemSubTotal(itemSubTotal) {
        // console.log(itemSubTotal);

        const callback = () => {
            // console.log(this.state.cartItemSubTotals);

            this.setState({
                subtotal: (this.state.cartItemSubTotals.reduce((prev, curr) => prev + curr.itemSubTotal, 0))
            });
        };

        // const cartItemSubTotals = [...this.state.cartItemSubTotals];
        const cartItemSubTotals = this.state.cartItemSubTotals;

        const index = cartItemSubTotals.findIndex(cis => cis.itemId === itemSubTotal.itemId);
        if(index !== -1) {
            cartItemSubTotals.splice(index, 1);
        }

        cartItemSubTotals.push(itemSubTotal);


        this.setState({cartItemSubTotals}, callback);
    }

    renderCartItems() {
        return this.props.cart.map((cartItem) => 
            <CartItem cartItem={cartItem} key={cartItem.itemId} onUpdateItemSubTotal={this.onUpdateItemSubTotal} removeCartItem={this.props.removeCartItem} />
        );
    }

    submit(e) {
        // TODO: checkout

        this.props.toggleCartModal();
    }

    render() {
        // console.log(this.props.restaurant);
        // console.log(this.props.cart);

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

                {(this.props.cart.length == 0) &&
                    <div className="cart__empty-template visible">
                        <p>Your shopping cart is empty!</p>
                    </div>
                }

                {(this.props.cart.length > 0) &&
                    <div className="cart__content">
                        <div className="cart__items">
                            {this.renderCartItems()}
                        </div>

                        <div className="cart__pricing">
                            <div className="cart__pricing-box cart__pricing-box-subtotal">
                                <p className="cart__pricing-box__title">Subtotal</p>
                                <p className="cart__pricing-box__value">{`${this.state.subtotal}.00 EGP`}</p>
                            </div>
                            <div className="cart__pricing-box cart__pricing-box-delivery">
                                <p className="cart__pricing-box__title">Delivery fee</p>
                                <p className="cart__pricing-box__value">{`${this.props.restaurant.deliveryFee}.00 EGP`}</p>
                            </div>
                            <div className="cart__pricing-box cart__pricing-box-total">
                                <p className="cart__pricing-box__title">Total</p>
                                <p className="cart__pricing-box__value">{`${this.state.subtotal + this.props.restaurant.deliveryFee}.00 EGP`}</p>
                            </div>
                        </div>

                        <div className="cart__submit">
                            <button className="cart__submit-btn" onClick={this.submit}>{this.props.submitBtnTitle || 'Checkout'}</button>
                        </div>
                    </div>
                }

            </section>
        );
    }
}

export default Cart;