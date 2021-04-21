import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import orderApi from '../../api/OrderApi';

const Orders = (props) => {

    const [activeTab, setActiveTab] = useState("0");
    const [orders, setOrders] = useState([]);

    useEffect(async () => {
        const orders = (await orderApi.getUserOrders(props.auth.user.id)).data;
        console.log(orders);

        setOrders(orders);
    }, [])

    const onTabClick = e => {
        e.preventDefault();

        const id = e.target.closest(".orders__tab").dataset["id"];
        setActiveTab(id);
    }

    const renderTabs = () => {
        const tabs = [
            { id: "0", title: "Current Order" },
            { id: "1", title: "Past Orders" }
        ];

        return tabs.map(tab =>
            <li className={`orders__tab ${(tab.id === activeTab) ? "orders__tab--active" : ""}`}
                key={tab.id} data-id={tab.id} onClick={e => onTabClick(e)}>
                <a href="#">{tab.title}</a>
            </li>);
    }

    const renderActivePane = () => {
        return (activeTab === "0")
            ? renderCurrentOrderPane()
            : renderPastOrdersPane();
    }

    const renderCurrentOrderPane = () => {

        if (orders.length === 0)
            return renderNoOrders();

        return renderOrderList();
    }

    const renderPastOrdersPane = () => {

        if (orders.length === 0)
            return renderNoOrders();

        return renderOrderList();
    }

    const renderNoOrders = () => {
        return (
            <div className="no-orders">
                <h3 className="no-orders__primary-title">No Orders found</h3>
                <p className="no-orders__secondary-title">Ordrer through the fastest delivery network,
                     get your order delivered faster.</p>
            </div>
        );
    }

    const renderOrderList = () => {
        const orderList = orders.map(order => {
            return (
                <article className="order" data-id={order.id} key={order.id}>
                    <div className="order__summary">
                        <img className="order__restaurant-logo" src={order.branch.restaurant.logo} alt={order.branch.restaurant.name} /> 
                        <div className="order__details">
                            <h4 className="order__restaurant-name">{order.branch.restaurant.name}</h4>
                            <p className="order__date">
                                {new Date(order.createdAt).toLocaleString("en-US", { dateStyle: "long", timeStyle: "short" })}
                            </p>
                            <div className="order__info">
                                <p className="order__id">Order Id: {order._id.slice(0,10)}</p>
                                <p className="order__status">Delivered</p>
                            </div>
                        </div>
                    </div>
                    <div className="order__actions">
                        <button className="order__btn">
                            <span className="order__btn__icon order__btn__icon--rate"></span>
                            <span>Rate</span>
                        </button>
                        <button className="order__btn">
                            <span className="order__btn__icon order__btn__icon--view"></span>
                            <span>View</span>
                        </button>
                    </div>
                </article>
            );
        });

        return (
            <div className="order-list">
                {orderList}
            </div>
        );

    }

    return (
        <main className="main orders-page__main">

            <div className="orders">
                <div className="orders__heading">
                    <ul className="orders__tabs">
                        {renderTabs()}
                    </ul>
                </div>
                <div className="orders__body">
                    <div className="orders__panes">
                        {renderActivePane()}
                    </div>
                </div>
            </div>

        </main>
    );
}


const mapStateToProps = state => {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Orders);
