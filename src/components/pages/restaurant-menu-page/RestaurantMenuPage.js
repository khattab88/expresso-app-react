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
            isCartModalOpen: false,
        };

        this.toggleLocationModal = this.toggleLocationModal.bind(this);
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

    toggleLocationModal(e) {
        this.setState({
            isLocationModalOpen: !this.state.isLocationModalOpen
        })
    }

    toggleCartModal(e) {
        console.log(e.target);
        
        this.setState({
            isCartModalOpen: !this.state.isCartModalOpen
        })
    }

    render() {
        return (
            <div className="container restaurant-menu-page">
                <Nav />
                <RestaurantMenuHeader restaurant={this.restaurant} toggleLocationModal={this.toggleLocationModal} />
                <RestaurantMenu restaurant={this.restaurant} toggleCartModal={this.toggleCartModal} />
                <Footer />

                <LocationModal isOpen={this.state.isLocationModalOpen} toggleLocationModal={this.toggleLocationModal} />
                <MenuItemModal />
                <CartModal isOpen={this.state.isCartModalOpen} toggleCartModal={this.toggleCartModal} />
            </div>
        );
    }
}

export default RestaurantMenuPage;