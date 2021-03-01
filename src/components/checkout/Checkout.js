import React from 'react';

import UserInfo from './customer-info/user-info/UserInfo';
import DeliveryInfo from './customer-info/delivery-info/DeliveryInfo';
import PaymentInfo from './customer-info/payment-info/PaymentInfo';

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

        this.updateUserInfo = this.updateUserInfo.bind(this);
    }

    updateUserInfo(updated) {
        this.setState({
            customer: {
                user: updated
            }
        })
    }

    componentDidUpdate() {
        console.log(this.state.customer.user);
    }

    render() {
        return (
            <main className="main checkout-page__main">

                <div className="checkout">
                    <section className="customer-info">
                        <UserInfo userInfo={this.state.customer.user} updateUserInfo={this.updateUserInfo} />

                        <DeliveryInfo delivery={this.state.customer.delivery} />

                        <PaymentInfo payment={this.state.customer.payment} />
                    </section>

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