import React from 'react';

import Nav from "../../nav/Nav";
import HomeHeader from "../../headers/home-header/HomeHeader";
import Footer from "../../footer/Footer";
import CategoriesShowcase from "../../categories-showcase/CategoriesShowcase";
import RestaurantsShowcase from "../../restaurants-showcase/RestaurantsShowcase";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="Home">
                <Nav />
                <HomeHeader />
                <CategoriesShowcase />
                <RestaurantsShowcase />
                <Footer />
            </div>
        );
    }
}

export default HomePage;