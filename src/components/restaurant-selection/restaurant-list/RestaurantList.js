import React from 'react';

import RestaurantItem from '../restaurant-item/RestaurantItem';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const restaurantList = this.props.restaurants.map((restaurant) =>
            <RestaurantItem restaurant={restaurant} key={restaurant.id} onSelect={this.props.onSelect} />
        );

        return (
            <ul className="restaurant-selection__restaurant-list">
                {restaurantList}
            </ul>
        );
    }
}

export default RestaurantList;