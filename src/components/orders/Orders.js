import React, { useState } from 'react';

const Orders = (props) => {

    const [activeTab, setActiveTab] = useState("0");

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

        /// if(user.orders.length === 0)
        return renderNoOrders();

        return(
            <h3>CURRENT ORDER</h3>
        );
    }

    const renderPastOrdersPane = () => {

        /// if(user.orders.length === 0)
        return renderNoOrders();

        return(
            <h3>PAST ORDERS</h3>
        );
    }

    const renderNoOrders = () => {
        return(
            <div className="no-orders">
                <h3 className="no-orders__primary-title">No Orders found</h3>
                <p className="no-orders__secondary-title">Ordrer through the fastest delivery network,
                     get your order delivered faster.</p>
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

export default Orders;
