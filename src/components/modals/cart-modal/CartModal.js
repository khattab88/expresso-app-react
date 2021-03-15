import React from 'react';

import Cart from '../../cart/Cart';

class CartModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.restaurant);
        // console.log(this.props.cart);


        const className = this.props.isOpen 
                            ? "cart-modal cart-modal--open"
                            : "cart-modal cart-modal--close";

        return (
            <div className={className}>
                <div className="vertical-alignment-helper">
                    <div className="modal-dailog">
                        <div className="cart-modal__content cart-modal__content--animated">
                            <Cart toggleCartModal={this.props.toggleCartModal}
                                  restaurant={this.props.restaurant}
                                  cart={this.props.cart} removeCartItem={this.props.removeCartItem} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartModal;