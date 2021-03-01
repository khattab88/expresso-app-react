import React from 'react';

import Nav from '../../nav/Nav';
import RestaurantMenuHeader from '../../headers/restaurant-menu-header/RestaurantMenuHeader';
import RestaurantMenu from '../../restaurant-menu/RestaurantMenu';
import Footer from '../../footer/Footer';

import MenuItemModal from '../../modals/menu-item-modal/MenuItemModal';
import CartModal from '../../modals/cart-modal/CartModal';
import LocationModal from '../../modals/location-modal/LocationModal';

class RestaurantMenuPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLocationModalOpen: false,
            isMenuItemModalOpen: false,
            isCartModalOpen: false,
        };

        this.toggleLocationModal = this.toggleLocationModal.bind(this);
        this.toggleMenuItemModal = this.toggleMenuItemModal.bind(this);
        this.toggleCartModal = this.toggleCartModal.bind(this);

        this.restaurant = {
            id: "1", 
            name: "Pizza Hut",
            slogan: "I like it",
            image: "rest-00.jpg",
            deliveryTime: 35,
            area: {
                id: "1",
                name: "Heliopolis"
            }
        };
    }

    componentDidMount() {
        // console.log(this.state.isMenuItemModalOpen);
    }

    componentDidUpdate() {
        // console.log(this.state.isMenuItemModalOpen);
    }

    toggleLocationModal(e) {
        this.setState({
            isLocationModalOpen: !this.state.isLocationModalOpen
        })
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
            <div className="container restaurant-menu-page">
                <Nav />
                <RestaurantMenuHeader restaurant={this.restaurant} toggleLocationModal={this.toggleLocationModal} />
                <RestaurantMenu restaurant={this.restaurant} toggleMenuItemModal={this.toggleMenuItemModal} toggleCartModal={this.toggleCartModal} />
                <Footer />

                <LocationModal isOpen={this.state.isLocationModalOpen} toggleLocationModal={this.toggleLocationModal} />
                <MenuItemModal isOpen={this.state.isMenuItemModalOpen} toggleMenuItemModal={this.toggleMenuItemModal} />
                <CartModal isOpen={this.state.isCartModalOpen} toggleCartModal={this.toggleCartModal} />
            </div>
        );
    }
}

export default RestaurantMenuPage;