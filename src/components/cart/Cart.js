import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import CartItem from './cart-item/CartItem';

import orderApi from '../../api/OrderApi';

import { clearCart, clearBranch } from '../../store/actions';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItemSubTotals: [],
            subtotal: 0
        };

        this.onUpdateItemSubTotal = this.onUpdateItemSubTotal.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        // console.log(this.props);

        // console.log(this.props.submitBtnTitle);
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.cart);
    }

    onUpdateItemSubTotal(itemSubTotal) {
        // console.log(itemSubTotal);

        const callback = () => {
            // console.log(this.state.cartItemSubTotals);

            this.setState({
                subtotal: (this.state.cartItemSubTotals.reduce((prev, curr) => prev + curr.itemSubTotal, 0))
            });
        };


        const cartItemSubTotals = this.state.cartItemSubTotals;

        const index = cartItemSubTotals.findIndex(cis => cis.itemId === itemSubTotal.itemId);
        if (index !== -1) {
            cartItemSubTotals.splice(index, 1);
        }

        cartItemSubTotals.push(itemSubTotal);


        this.setState({ cartItemSubTotals }, callback);
    }

    async submit(e) {
        if(this.props.toggleCartModal) {
            this.props.toggleCartModal();
        }
        else {
            // Place Order()

            const orderItemsData = this.props.cart.map(ci => {
                return {
                    menuItem: ci.item_id,
                    quantity: ci.count,
                    notes: ci.notes,
                    options: ci.options.map(opt => {
                        return {
                            option: opt._id,
                            selection: opt.selection.map(s => {
                                return { optionItem: s._id }
                            })
                        }
                    })
                }
            });

            const orderData = {
                user: this.props.auth.user._id,
                branch: this.props.branch._id,
                deliveryAddress: this.props.addresses[0]._id,
                subTotal: this.state.subtotal,
                deliveryFee: this.props.branch.restaurant.deliveryFee,
                total: this.state.subtotal + this.props.branch.restaurant.deliveryFee,
                orderItems: orderItemsData
            };

            // console.log(orderData);

            const response = await orderApi.createOrder(orderData);
            // console.log(response);

            if(!response.err) {
                this.props.clearCart();
                this.props.clearBranch();

                this.props.onCheckoutCompleted();
            } else {
                return alert("Sorry, something went wrong!!!")
            }

        }
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

                {(this.props.cart.length == 0) &&
                    <div className="cart__empty-template visible">
                        <p>Your shopping cart is empty!</p>
                    </div>
                }

                {(this.props.cart.length > 0) &&
                    <div className="cart__content">
                        <div className="cart__items">
                            {
                                this.props.cart.map((cartItem) =>
                                    <CartItem cartItem={cartItem} key={cartItem.itemId}
                                        onUpdateItemSubTotal={this.onUpdateItemSubTotal} />)
                            }
                        </div>

                        <div className="cart__pricing">
                            <div className="cart__pricing-box cart__pricing-box-subtotal">
                                <p className="cart__pricing-box__title">Subtotal</p>
                                <p className="cart__pricing-box__value">{`${this.state.subtotal}.00 EGP`}</p>
                            </div>
                            <div className="cart__pricing-box cart__pricing-box-delivery">
                                <p className="cart__pricing-box__title">Delivery fee</p>
                                <p className="cart__pricing-box__value">{`${this.props.branch.restaurant.deliveryFee}.00 EGP`}</p>
                            </div>
                            <div className="cart__pricing-box cart__pricing-box-total">
                                <p className="cart__pricing-box__title">Total</p>
                                <p className="cart__pricing-box__value">{`${this.state.subtotal + this.props.branch.restaurant.deliveryFee}.00 EGP`}</p>
                            </div>
                        </div>

                        <div className="cart__submit">
                            {
                                (this.props.submitBtnTitle !== "Checkout")
                                    ? <button className="cart__submit-btn" onClick={this.submit} disabled={!this.props.auth.isLoggedIn}>{this.props.submitBtnTitle}</button>
                                    : <Link className="cart__submit-btn" to='/checkout'
                                        style={{ display: 'inline-block', textDecoration: 'none' }}>
                                        {this.props.submitBtnTitle}
                                      </Link>
                            }

                        </div>
                    </div>
                }

            </section>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state.cart);

    return {
        auth: state.auth,
        branch: ownProps.branch || state.selectedBranch,
        cart: state.cart,
        addresses: state.addresses
    }
}

export default connect(mapStateToProps, { clearCart, clearBranch })(Cart);