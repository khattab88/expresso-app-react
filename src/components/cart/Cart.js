import React from 'react';

import CartItem from './cart-item/CartItem';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: []
        };

        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.setState({
            cartItems: [
                {
                    id: '1',
                    name: 'Double Cheese Burger',
                    price: 85,
                    count: 2,
                    notes: "served asap, please!",
                    options: [
                        {
                            id: "1",
                            name: 'Choice of bun or lettuce wrap',
                            selected: {
                                id: "1",
                                name: 'Lettuce Wrap',
                                value: 3
                            }
                        },
                        {
                            id: "2",
                            name: 'Choice of burger size',
                            selected: {
                                id: "2",
                                name: 'Regular',
                                value: 4
                            }
                        }
                    ]
                }
            ],
        });

        const subTotal = this.calcSubTotal();
        const delivery = 10;
        const total = subTotal + delivery;

        this.setState({ subTotal, delivery, total });
    }

    calcSubTotal() {
        return 0;
    }

    renderCartItems() {
        return this.state.cartItems.map((item) => 
            <CartItem item={item} key={item.id}/>
        );
    }

    submit(e) {
        // TODO: checkout

        this.props.toggleCartModal();
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

                {(this.state.cartItems.length == 0) &&
                    <div className="cart__empty-template visible">
                        <p>Your shopping cart is empty!</p>
                    </div>
                }

                {(this.state.cartItems.length) &&
                    <div className="cart__content">
                        <div className="cart__items">
                            {this.renderCartItems()}
                        </div>

                        <div className="cart__pricing">
                            <div className="cart__pricing-box cart__pricing-box-subtotal">
                                <p className="cart__pricing-box__title">Subtotal</p>
                                <p className="cart__pricing-box__value">{`${this.state.subTotal}.00 EGP`}</p>
                            </div>
                            <div className="cart__pricing-box cart__pricing-box-delivery">
                                <p className="cart__pricing-box__title">Delivery fee</p>
                                <p className="cart__pricing-box__value">{`${this.state.delivery}.00 EGP`}</p>
                            </div>
                            <div className="cart__pricing-box cart__pricing-box-total">
                                <p className="cart__pricing-box__title">Total</p>
                                <p className="cart__pricing-box__value">{`${this.state.total}.00 EGP`}</p>
                            </div>
                        </div>

                        <div className="cart__submit">
                            <button className="cart__submit-btn" onClick={this.submit}>Place Order</button>
                        </div>
                    </div>
                }

            </section>
        );
    }
}

export default Cart;