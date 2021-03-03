import React from 'react';

class CartButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return(
            <div className="cart-btn">
                <img alt="Cart" height="27" className="cart-btn__img"
                    src="/assets/img/icons/shopping_cart_icon.svg"
                    title="Cart" width="30" />
                <em className="cart-btn__item-count">{this.state.count}</em>
            </div>
        );
    }
}

export default CartButton;