import React from 'react';

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
            restaurant: {},
            cart: [],
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
        };

        this.updateUserInfo = this.updateUserInfo.bind(this);
        this.updateDeliveryInfo = this.updateDeliveryInfo.bind(this);
        this.updatePaymentInfo = this.updatePaymentInfo.bind(this);

        this.removeCartItem = this.removeCartItem.bind(this);

        this.toggleMapModal = this.toggleMapModal.bind(this);
    }

    componentDidMount() {
        this.setState({
            restaurant: {
                id: "1",
                name: "Pizza Hut",
                img: "rest-00.jpg",
                slogan: "I like it",
                deliveryTime: 35,
                deliveryFee: 20,
                area: {
                    id: "1",
                    name: "Heliopolis"
                }
            }
        });

        this.setState({
            cart: [
                {
                    count: 2,
                    itemId: "1",
                    itemName: "Double Cheese Burger",
                    notes: "please romove any spices.",
                    price: 70,
                    options: [
                        {
                            id: "1",
                            name: "Choice of bun or lettuce wrap",
                            type: "Required",
                            optionItems: [
                                {
                                    id: "1",
                                    name: "Potato Bun",
                                    value: 3
                                },
                                {
                                    id: "2",
                                    name: "Lettuce Wrap",
                                    value: 6
                                }
                            ],
                            selection: [
                                {
                                    id: "1",
                                    name: "Potato Bun",
                                    value: 3
                                }
                            ]
                        },
                        {
                            id: "2",
                            name: "Choice of cheese",
                            type: "Optionl",
                            optionItems: [
                                {
                                    id: "3",
                                    name: "No Cheese",
                                    value: 0,
                                },
                                {
                                    id: "4",
                                    name: "Regular",
                                    value: 5,
                                },
                                {
                                    id: "5",
                                    name: "Cheddar",
                                    value: 10,
                                },
                                {
                                    id: "6",
                                    name: "Spicy",
                                    value: 15,
                                },
                            ],
                            selection: [
                                {
                                    id: "4",
                                    name: "Regular",
                                    value: 5,
                                },
                                {
                                    id: "5",
                                    name: "Cheddar",
                                    value: 10,
                                }
                            ]
                        }
                    ]
                },
                {
                    count: 1,
                    itemId: "2",
                    itemName: "Turkey Cheese Burger",
                    notes: "extra cheese.",
                    price: 60,
                    options: []
                }
            ]
        });
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

    removeCartItem(itemId) {
        const callback = () => { 
            // console.log(this.state.cart); 
        };

        // console.log("delete item" + itemId);

        let cart = [...this.state.cart];
        /* check if cart item already exists
         if exists, remove it from cart items */
        const cartItemIndex = cart.findIndex(ci => ci.itemId === itemId);
        if(cartItemIndex > -1) {
            cart.splice(cartItemIndex, 1);
        }

        this.setState({cart}, callback);
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
                            cart={this.state.cart} removeCartItem={this.removeCartItem} />
                        <Disclaimer />
                    </section>
                </div>

                <MapModal isOpen={this.state.isMapModalOpen} toggleMapModal={this.toggleMapModal} />
            </main>
        );
    }
}

export default Checkout;