import React from 'react';

import Nav from '../../nav/Nav';
import CheckoutHeader from '../../headers/checkout-header/CheckoutHeader';
import Footer from '../../footer/Footer';

import Checkout from '../../checkout/Checkout';

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container checkout-page">
                <Nav />
                <CheckoutHeader />
                <Checkout restaurant={this.restaurant} />
                <Footer />
            </div>
        );
    }
}

export default CheckoutPage;