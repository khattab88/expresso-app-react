import React from 'react';

import Nav from '../../nav/Nav';
import CheckoutHeader from '../../headers/checkout-header/CheckoutHeader';
import Footer from '../../footer/Footer';

import Checkout from '../../checkout/Checkout';

class CheckoutPage extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
    }

    componentDidMount() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div className="container checkout-page" ref={this.ref} >
                <Nav />
                <CheckoutHeader />
                <Checkout restaurant={this.restaurant} />
                <Footer />
            </div>
        );
    }
}

export default CheckoutPage;