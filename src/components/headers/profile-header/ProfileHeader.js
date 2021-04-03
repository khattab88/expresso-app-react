import React from 'react';
import { Link } from "react-router-dom";

const ProfileHeader = (props) => {
    return (
        <header className="header profile-page__header" style={{ backgroundImage: 'url("/assets/img/profile-banner.jpg")' }}>
            <section className="breadcrumb">
                <ul className="breadcrumb__list">
                    <li className="breadcrumb__item">
                        <Link className="breadcrumb__link" to="/">Home</Link>
                    </li>
                    <li className="breadcrumb__item">
                        <span className="breadcrumb__separator">/</span>
                    </li>
                    <li className="breadcrumb__item breadcrumb__item--current">
                        <Link className="breadcrumb__link" to="/profile" disabled>My Account</Link>
                    </li>
                </ul>
            </section>

            <h2 className="profile-page__title">My Account</h2>
        </header>
    );
}

export default ProfileHeader;