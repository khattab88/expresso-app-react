import React from 'react';

import CustomerInfo from './customer-info/CustomerInfo';

import Cart from './cart/Cart';
import Disclaimer from './disclaimer/Disclaimer';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main checkout-page__main">

                <div className="checkout">
                    <CustomerInfo />

                    <section className="checkout-info-box order-info">
                        <Cart />
                        <Disclaimer />
                    </section>
                </div>

                {/* map modal */}
                {/* <div className="map-modal"></div> */}

            </main>
        );
    }
}

export default Checkout;