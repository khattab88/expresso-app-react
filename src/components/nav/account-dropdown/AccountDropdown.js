import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const AccountDropdown = (props) => {

    useEffect(() => {
        console.log(props.isOpen);
    });

    return (
        <ul className={props.isOpen ? "account-dropdown account-dropdown--open" : "account-dropdown"}>
            <li className="account-dropdown__item">
                <div className="account-dropdown__header">
                    <div className="user-detail">
                        <p className="user-detail__name">Mahmoud Khattab</p>
                        <span className="user-detail__email">m.khatab.88@gmail.com</span>
                    </div>
                </div>
            </li>

            <li className="account-dropdown__item">
                <Link className="account-dropdown__link" to="/profile">
                    <img className="account-dropdown__icon" src="/assets/img/icons/user/settings_icon.svg" />
                    <p>My Account</p>
                </Link>
            </li>
            <li className="account-dropdown__item">
                <Link className="account-dropdown__link" to="/orders">
                    <img className="account-dropdown__icon" src="/assets/img/icons/user/orders_icon.svg" />
                    <p>My Orders</p>
                </Link>
            </li>
            <li className="account-dropdown__item">
                <a href="#" className="account-dropdown__link">
                    <img className="account-dropdown__icon" src="/assets/img/icons/user/logout_icon.svg" />
                    <p>Logout</p>
                </a>
            </li>
        </ul>
    );
}

export default AccountDropdown;