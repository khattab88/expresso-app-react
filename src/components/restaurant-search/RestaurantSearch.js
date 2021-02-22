import React from 'react';

import LocationSelection from '../location-selection/LocationSelection';
import RestaurantSelection from '../restaurant-selection/RestaurantSelection';

class RestaurantSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="restaurant-search">
                <h2 className="restaurant-search__title">Restaurants delivering to your city.</h2>
                <div className="restaurant-search__box">
                    <div className="restaurant-search__form">
                        <div className="restaurant-search__input location-selection-wrapper">
                            <LocationSelection />
                        </div>
                        <div className="restaurant-search__input restaurant-selection-wrapper">
                            <RestaurantSelection />
                        </div>
                        <button className="restaurant-search__submit" type="submit">Find Food</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantSearch;