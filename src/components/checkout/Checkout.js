import React from 'react';

import CustomerInfo from './customer-info/CustomerInfo';
import Cart from '../cart/Cart';
import Disclaimer from './disclaimer/Disclaimer';

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customer: {
                user: {
                    name: '',
                    email: '',
                },
                delivery: {
                    address: '',
                    street: '',
                    area: '',
                    city: '',
                    building: '',
                    apartment: '',
                    floor: '',
                    instructions: '',
                    mobile: '',
                    location: '',
                    time: 'Now',
                },
                payment: {
                    method: 'cash',
                    agreed: false,
                }
            }
        };
    }

    render() {
        return (
            <main className="main checkout-page__main">

                <div className="checkout">
                    <CustomerInfo customer={this.state.customer} />

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