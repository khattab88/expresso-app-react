import React from 'react';

import Nav from '../../nav/Nav';
import CheckoutHeader from '../../headers/checkout-header/CheckoutHeader';
import Footer from '../../footer/Footer';

import Checkout from '../../checkout/Checkout';

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);

        this.restaurant = {
            id: "1",
            name: "Burger King"
        };
    }

    render() {
        return (
            <div className="container checkout-page">
                <Nav />
                <CheckoutHeader restaurantName={this.restaurant.name} />
                <Checkout restaurant={this.restaurant} />
                <Footer />
            </div>
        );
    }
}

export default CheckoutPage;