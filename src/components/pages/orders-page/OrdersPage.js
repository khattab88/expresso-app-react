import React from 'react';

import Nav from '../../nav/Nav';
import OrdersHeader from "../../headers/orders-header/OrdersHeader";
import Orders from '../../orders/Orders';
import Footer from '../../footer/Footer';

const OrdersPage = (props) => {
    return(
        <div className="container orders-page">
            <Nav />
            <OrdersHeader />
            <Orders />
            <Footer />
        </div>
    );
}

export default OrdersPage;