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
        };

        this.toggleLocationModal = this.toggleLocationModal.bind(this);

        this.restaurant = {
            id: "1", 
            name: "Pizza Hut",
            slogan: "I like it",
            image: "web_cover_Mcd.png",
            deliveryTime: 35,
            area: {
                id: "1",
                name: "Heliopolis"
            }
        };
    }

    toggleLocationModal(e) {
        this.setState({
            isLocationModalOpen: !this.state.isLocationModalOpen
        })
    }

    render() {
        return (
            <div className="container restaurant-menu-page">
                <Nav />
                <RestaurantMenuHeader restaurant={this.restaurant} toggleLocationModal={this.toggleLocationModal} />
                <RestaurantMenu restaurant={this.restaurant} />
                <Footer />

                <LocationModal isOpen={this.state.isLocationModalOpen} toggleLocationModal={this.toggleLocationModal} />
                <MenuItemModal />
                <CartModal />
            </div>
        );
    }
}

export default RestaurantMenuPage;