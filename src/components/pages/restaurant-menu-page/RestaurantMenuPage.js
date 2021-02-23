import React from 'react';

import Nav from '../../nav/Nav';
import RestaurantMenuHeader from '../../headers/restaurant-menu-header/RestaurantMenuHeader';
import RestaurantMenu from '../../restaurant-menu/RestaurantMenu';
import Footer from '../../footer/Footer';

class RestaurantMenuPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const restaurant = {
            id: "1", 
            name: "Pizza Hut",
            slogan: "I like it",
            deliveryTime: 35,
            area: {
                id: "1",
                name: "Heliopolis"
            }
        };

        return (
            <div className="container restaurant-menu-page" restaurant={restaurant}>
                <Nav />
                <RestaurantMenuHeader restaurant={restaurant} />
                <RestaurantMenu />
                <Footer />
            </div>
        );
    }
}

export default RestaurantMenuPage;