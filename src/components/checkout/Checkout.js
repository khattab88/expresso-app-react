import React from 'react';
import { Redirect } from "react-router-dom";
import { withRouter } from 'react-router';

import UserInfo from './customer-info/user-info/UserInfo';
import DeliveryInfo from './customer-info/delivery-info/DeliveryInfo';
import PaymentInfo from './customer-info/payment-info/PaymentInfo';

import Cart from '../cart/Cart';
import Disclaimer from './disclaimer/Disclaimer';

import MapModal from '../modals/map-modal/MapModal';

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
            },
            isMapModalOpen: false,
            isCheckoutCompleted: false
        };

        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.updateDeliveryInfo = this.updateDeliveryInfo.bind(this);
        this.updatePaymentInfo = this.updatePaymentInfo.bind(this);

        this.toggleMapModal = this.toggleMapModal.bind(this);

        this.onCheckoutCompleted = this.onCheckoutCompleted.bind(this);
    }

    componentDidMount() {
        // console.log(this.state.delivery);
    }

    componentDidUpdate() {
        // console.log(this.state.user);
        // console.log(this.state.delivery);
        // console.log(this.state.payment);
    }

    toggleMapModal() {
        this.setState({
            isMapModalOpen: !this.state.isMapModalOpen
        });
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

    onCheckoutCompleted() {
        const callback = () => console.log('Checkout completed: ' + this.state.isCheckoutCompleted);

        this.setState({ isCheckoutCompleted: true }, callback);

        this.props.history.push('/orders');
    }

    render() {

        return (
            <main className="main checkout-page__main">

                <div className="checkout">
                    <section className="customer-info">
                        <UserInfo userInfo={this.state.user} updateUserInfo={this.updateUserInfo} />

                        <DeliveryInfo deliveryInfo={this.state.delivery} updateDeliveryInfo={this.updateDeliveryInfo} toggleMapModal={this.toggleMapModal} />

                        <PaymentInfo paymentInfo={this.state.payment} updatePaymentInfo={this.updatePaymentInfo} />
                    </section>

                    <section className="checkout-info-box order-info">
                        <Cart 
                            submitBtnTitle="Place Order"
                            restaurant={this.state.restaurant}
                            onCheckoutCompleted={this.onCheckoutCompleted} />
                        <Disclaimer />
                    </section>
                </div>

                <MapModal isOpen={this.state.isMapModalOpen} toggleMapModal={this.toggleMapModal} />
            </main>
        );
    }
}

export default withRouter(Checkout);