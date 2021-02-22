import React from 'react';

import Nav from '../../nav/Nav';
import RestaurantMenuHeader from '../../headers/restaurant-menu-header/RestaurantMenuHeader';

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
            </div>
        );
    }
}

export default RestaurantMenuPage;