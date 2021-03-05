import React from 'react';

import MenuSidebar from './menu-sidebar/MenuSidebar';
import List from './list/List';

import MenuItemModal from '../modals/menu-item-modal/MenuItemModal';
import CartModal from '../modals/cart-modal/CartModal';

class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuItemModalOpen: false,
            isCartModalOpen: false,
        };

        this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);
        this.toggleCartModal = this.toggleCartModal.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.menu);
    }

    toggleMenuItemModal(e) {
        this.setState({
            isMenuItemModalOpen: !this.state.isMenuItemModalOpen
        });
    }

    toggleCartModal(e) {
        this.setState({
            isCartModalOpen: !this.state.isCartModalOpen
        })
    }

    render() {
        return (
            <main className="main restaurant-menu-page__main">
                <MenuSidebar toggleCartModal={this.toggleCartModal} menu={this.props.menu} />
                <List toggleMenuItemModal={this.toggleMenuItemModal} menu={this.props.menu} />

                <MenuItemModal isOpen={this.state.isMenuItemModalOpen} toggleMenuItemModal={this.toggleMenuItemModal} />
                <CartModal isOpen={this.state.isCartModalOpen} toggleCartModal={this.toggleCartModal} />
            </main>
        );
    }
}

export default RestaurantMenu;