import React from 'react';

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
                    <i className="restaurant-sidebar__show-cart-icon material-icons">shopping_cart</i>
                </section>
                
                <Categories menu={this.props.menu} />
            </aside>
        );
    }
}

export default MenuSidebar;