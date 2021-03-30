import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import AccountDropdown from "../account-dropdown/AccountDropdown";

const AccountButton = (props) => {
    const ref = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // console.log(isOpen);

        document.body.addEventListener("click", onBodyClick);

        return () => {
            document.body.removeEventListener("click", onBodyClick);
        }
    }, []);

    const onBodyClick = e => {
        if(ref.current && ref.current.contains(e.target)) {
            return;
        }

        setIsOpen(false);
    }

    return (
        <div className="AccountButton" style={{ position: 'relative' }} ref={ref}>
            <button className={isOpen ?"account-btn account-btn--open" : "account-btn"} onClick={() => setIsOpen(!isOpen)}>
                <img className="account-btn__img" src="/assets/img/icons/user/user_icon.svg" />
                <i className="account-btn__caret--down fa fa-caret-down"></i>
            </button>
            <AccountDropdown isOpen={isOpen} />
        </div>
    );
}

export default AccountButton;