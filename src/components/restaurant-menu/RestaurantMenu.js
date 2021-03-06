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
            currentItem: {},
            isCartModalOpen: false,
        };

        this.renderMenuItemModal = this.renderMenuItemModal.bind(this);
        this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);

        this.toggleCartModal = this.toggleCartModal.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.menu);
    }

    renderMenuItemModal(itemId) {
        const item = this.props.getItem(itemId);
        // console.log(item);

        this.setState({
            currentItem: item,
        });
    }

    toggleMenuItemModal() {
        this.setState({
            isMenuItemModalOpen: !this.state.isMenuItemModalOpen,
        });
    }

    componentDidUpdate() {
        // console.log(this.state.currentItem);
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
                <List menu={this.props.menu} toggleMenuItemModal={this.toggleMenuItemModal} renderMenuItemModal={this.renderMenuItemModal} />

                <MenuItemModal isOpen={this.state.isMenuItemModalOpen} toggleMenuItemModal={this.toggleMenuItemModal} item={this.state.currentItem} />
                <CartModal isOpen={this.state.isCartModalOpen} toggleCartModal={this.toggleCartModal} />
            </main>
        );
    }
}

export default RestaurantMenu;