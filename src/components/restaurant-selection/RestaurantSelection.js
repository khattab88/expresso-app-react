import React from 'react';

import RestaurantItem from './restaurant-item/RestaurantItem';

class RestaurantSelection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const restaurants = [
            { id: "1", name: "McDonald's", areaId: "1" },
            { id: "2", name: "KFC", areaId: "1" },
            { id: "3", name: "Pizza Hut", areaId: "1" },
            { id: "4", name: "Burger King", areaId: "1" },
            { id: "5", name: "Cook Door", areaId: "1" },
        ];

        const restaurantList = restaurants.map((restaurant) =>
            <RestaurantItem restaurant={restaurant} key={restaurant.id} />
        );

        return (
            <div className="restaurant-selection">
                <button className="restaurant-selection__btn">
                    <i className="restaurant-selection__icon-store material-icons">search</i>
                    <p className="restaurant-selection__value">Find a restaurant</p>
                    <i className="restaurant-selection__icon-caret restaurant-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i className="restaurant-selection__icon-caret restaurant-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>
                <div className="restaurant-selection__box">
                    <input type="text" className="restaurant-selection__input" />
                    <ul className="restaurant-selection__restaurant-list">
                        {restaurantList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RestaurantSelection;