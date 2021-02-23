import React from 'react';

import MenuSidebar from './menu-sidebar/MenuSidebar';
import List from './list/List';

import MenuItemModal from '../modals/menu-item-modal/MenuItemModal';
import CartModal from '../modals/cart-modal/CartModal';
import LocationModal from '../modals/location-modal/LocationModal';

class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main restaurant-menu-page__main">

                <MenuSidebar />
                <List />
                

                <MenuItemModal />
                <CartModal />
                <LocationModal />

            </main>
        );
    }
}

export default RestaurantMenu;