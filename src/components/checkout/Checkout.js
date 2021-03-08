import React from 'react';

import UserInfo from './customer-info/user-info/UserInfo';
import DeliveryInfo from './customer-info/delivery-info/DeliveryInfo';
import PaymentInfo from './customer-info/payment-info/PaymentInfo';

import CartSummary from '../checkout/cart-summary/CartSummary';
import Disclaimer from './disclaimer/Disclaimer';

class Checkout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
        };

        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.updateDeliveryInfo = this.updateDeliveryInfo.bind(this);
        this.updatePaymentInfo = this.updatePaymentInfo.bind(this);
    }

    updateUserInfo(updated) {
        this.setState({ user: updated });
    }

    updateDeliveryInfo(updated) {
        this.setState({ delivery: updated });
    }

    updatePaymentInfo(updated) {
        this.setState({ payment: updated });
    }

    componentDidUpdate() {
        // console.log(this.state.user);
        // console.log(this.state.delivery);
        // console.log(this.state.payment);
    }

    render() {
        return (
            <main className="main checkout-page__main">

                <div className="checkout">
                    <section className="customer-info">
                        <UserInfo userInfo={this.state.user} updateUserInfo={this.updateUserInfo} />

                        <DeliveryInfo deliveryInfo={this.state.delivery} updateDeliveryInfo={this.updateDeliveryInfo} />

                        <PaymentInfo paymentInfo={this.state.payment} updatePaymentInfo={this.updatePaymentInfo} />
                    </section>

                    <section className="checkout-info-box order-info">
                        <CartSummary />
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