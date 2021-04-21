import React, { useEffect } from 'react';

import Nav from '../../nav/Nav';
import OrdersHeader from "../../headers/orders-header/OrdersHeader";
import Orders from '../../orders/Orders';
import Footer from '../../footer/Footer';

const OrdersPage = (props) => {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <div className="container orders-page">
            <Nav />
            <OrdersHeader />
            <Orders />
            <Footer />
        </div>
    );
}

export default OrdersPage;