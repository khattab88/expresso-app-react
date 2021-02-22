import React from 'react';

import Nav from "../../nav/Nav";
import Header from "../../headers/restaurant-list-header/RestaurantListHeader";
import Footer from "../../footer/Footer";
import RestaurantListHeader from '../../headers/restaurant-list-header/RestaurantListHeader'
import RestaurantList from '../../restaurant-list/RestaurantList';

class RestaurantListPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="RestaurantList">
                <Nav />
                <RestaurantListHeader />
                <RestaurantList />
                <Footer />
            </div>
        );
    }
}

export default RestaurantListPage;