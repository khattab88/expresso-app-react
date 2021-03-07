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
            cart: []
        };

        this.renderMenuItemModal = this.renderMenuItemModal.bind(this);
        this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);

        this.toggleCartModal = this.toggleCartModal.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.menu);
    }

    componentDidUpdate() {
        // console.log(this.state.currentItem);
    }

    renderMenuItemModal(itemId) {
        const item = this.props.getItem(itemId);
        // console.log(item);

        this.setState({
            currentItem: item,
        }, () => console.log(this.state.currentItem));
    }

    toggleMenuItemModal() {
        this.setState({
            isMenuItemModalOpen: !this.state.isMenuItemModalOpen,
        });
    }

    toggleCartModal(e) {
        this.setState({
            isCartModalOpen: !this.state.isCartModalOpen
        })
    }

    addItemToCart(cartItem) {
        console.log(cartItem);

        const callback = () => { 
            console.log(this.state.cart);
        };
        
        let cart = [...this.state.cart];

        /* check if cart item already exists
         if exists, remove it from cart items */
        const cartItemIndex = cart.findIndex(ci => ci.itemId === cartItem.itemId);
        if(cartItemIndex > -1) {
            cart.splice(cartItemIndex, 1);
        }

        cart.push(cartItem);

        this.setState({cart}, callback);
    }

    render() {
        return (
            <main className="main restaurant-menu-page__main">
                <MenuSidebar toggleCartModal={this.toggleCartModal} menu={this.props.menu} />
                <List menu={this.props.menu} toggleMenuItemModal={this.toggleMenuItemModal} renderMenuItemModal={this.renderMenuItemModal} />

                <MenuItemModal isOpen={this.state.isMenuItemModalOpen} toggleMenuItemModal={this.toggleMenuItemModal}
                               item={this.state.currentItem} addItemToCart={this.addItemToCart} />
                <CartModal isOpen={this.state.isCartModalOpen} toggleCartModal={this.toggleCartModal} />
            </main>
        );
    }
}

export default RestaurantMenu;