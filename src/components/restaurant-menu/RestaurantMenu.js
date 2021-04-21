import React from 'react';
import { connect } from 'react-redux';

import MenuSidebar from './menu-sidebar/MenuSidebar';
import List from './list/List';

import MenuItemModal from '../modals/menu-item-modal/MenuItemModal';
import CartModal from '../modals/cart-modal/CartModal';
import Toaster from '../shared/toaster/Toaster';

import { selectBranch, addCartItem, removeCartItem } from '../../store/actions';

class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMenuItemModalOpen: false,
            currentItem: {},
            isCartModalOpen: false,
            isToasterVisible: false
        };

        this.renderMenuItemModal = this.renderMenuItemModal.bind(this);
        this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);

        this.toggleCartModal = this.toggleCartModal.bind(this);
        this.addItemToCart = this.addItemToCart.bind(this);

        this.toggleToaster = this.toggleToaster.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.menu);
    }

    componentDidUpdate(prevProps) {
        // console.log(this.props.branch);

        // console.log(this.state.currentItem);

        // console.log("PREV PROPS: ");
        // console.dir(prevProps.cart);

        // console.log("CURRENT PROPS: ");
        // console.dir(this.props.cart);
    }

    renderMenuItemModal(itemId) {
        const callback =() => { 
            // console.log(this.state.currentItem); 
        };

        const item = this.props.getItem(itemId);
        // console.log(item);

        this.setState({
            currentItem: item,
        }, callback);
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
        
        // set selectedBranch mapState
        this.props.selectBranch(this.props.branch);
        
        let optionSelection = [];
        if(Object.keys(cartItem.optionSelection).length > 0) {
            for(const obj in cartItem.optionSelection) {

                const optionId = obj;
                const selection = cartItem.optionSelection[obj];

                
                const option = this.state.currentItem.options.find(opt => opt.id == optionId);
                option.selection = [];

                if(selection.indexOf(",") > -1) {
                    // multiple selection
                    selection.split(",").forEach(id => {
                        const optionItem = option.optionItems.find(oi => oi.id === id);
                        option.selection.push(optionItem);
                    });

                } else {
                    // single selection
                    const optionItem = option.optionItems.find(oi => oi.id === selection);
                    option.selection.push(optionItem);
                }

                // delete option.optionItems;

                optionSelection.push(option);
            }
        }

        /* format cart item */
        cartItem.item_id = this.state.currentItem._id;
        cartItem.itemName = this.state.currentItem.name;
        cartItem.price = this.state.currentItem.price;
        delete cartItem.optionSelection;
        cartItem.options = optionSelection;


        let cart = [...this.props.cart];

        /* check if cart item already exists
         if exists, remove it from cart items */
        if(cart.find(ci => ci.itemId === cartItem.itemId)) {
            this.props.removeCartItem(cartItem.itemId);
        }

        // console.log(cart);

        this.props.addCartItem(cartItem)
    }

    toggleToaster(e) {
        const callback = () => {
            // console.log(this.state.isToasterVisible);

            if(this.state.isToasterVisible) {
                let timerId = setTimeout(() => {
                    this.setState({isToasterVisible : false})
                }, 4000);

                timerId = null;
            }
        };
        
        this.setState({
            isToasterVisible: !this.state.isToasterVisible
        }, callback);
    }

    render() {
        return (
            <main className="main restaurant-menu-page__main">
                <MenuSidebar toggleCartModal={this.toggleCartModal} menu={this.props.menu} />
                <List menu={this.props.menu} toggleMenuItemModal={this.toggleMenuItemModal} renderMenuItemModal={this.renderMenuItemModal} />

                <MenuItemModal isOpen={this.state.isMenuItemModalOpen} toggleMenuItemModal={this.toggleMenuItemModal}
                               item={this.state.currentItem} addItemToCart={this.addItemToCart} 
                               toggleToaster={this.toggleToaster} />

                <CartModal isOpen={this.state.isCartModalOpen} toggleCartModal={this.toggleCartModal}
                           branch={this.props.branch} />

                <Toaster visible={this.state.isToasterVisible} msg="Item added to cart" toggleToaster={this.toggleToaster} />
            </main>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);

    return { cart: state.cart }
}

export default connect(mapStateToProps, { selectBranch, addCartItem, removeCartItem })(RestaurantMenu);