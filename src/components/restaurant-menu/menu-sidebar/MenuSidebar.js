import React from 'react';
import { connect } from 'react-redux';

import Categories from './categories/Categories';

class MenuSidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="restaurant-sidebar">
                <section className="restaurant-sidebar__show-cart" onClick={this.props.toggleCartModal}>
                    <h3 className="restaurant-sidebar__show-cart-title">Your Order</h3>
                    <i className="restaurant-sidebar__show-cart-icon material-icons">
                        shopping_cart
                        {(this.props.cartItemsCount > 0)
                            ? <em className="restaurant-sidebar__show-cart-count">{this.props.cartItemsCount}</em>
                            : null
                        }
                    </i>
                </section>

                <Categories menu={this.props.menu} />
            </aside>
        );
    }
}

const mapStateToProps = state => {
    return { cartItemsCount: state.cart.length }
}

export default connect(mapStateToProps)(MenuSidebar);