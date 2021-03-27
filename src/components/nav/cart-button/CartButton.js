import React from 'react';
import { connect } from 'react-redux';

class CartButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="cart-btn">
                <img alt="Cart" height="27" className="cart-btn__img"
                    src="/assets/img/icons/shopping_cart_icon.svg"
                    title="Cart" width="30" />
                <em className="cart-btn__item-count">{this.props.cartItemsCount}</em>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { cartItemsCount: state.cart.length }
}

export default connect(mapStateToProps)(CartButton);