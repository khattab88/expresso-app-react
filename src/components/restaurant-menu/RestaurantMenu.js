import React from 'react';

import MenuSidebar from './menu-sidebar/MenuSidebar';
import List from './list/List';

class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main restaurant-menu-page__main">
                <MenuSidebar toggleCartModal={this.props.toggleCartModal} />

                <List toggleMenuItemModal={this.props.toggleMenuItemModal} />
            </main>
        );
    }
}

export default RestaurantMenu;