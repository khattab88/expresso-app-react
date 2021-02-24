import React from 'react';

class CheckoutHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header checkout-page__header">
                <section className="breadcrumb">
                    <ul className="breadcrumb__list">
                        <li className="breadcrumb__item breadcrumb__item--back">
                            <i className="material-icons">chevron_left</i>
                        </li>
                        <li className="breadcrumb__item">
                            <span className="breadcrumb__separator">/</span>
                        </li>
                        <li className="breadcrumb__item breadcrumb__item--current">
                            <a className="breadcrumb__link" href="#">{this.props.restaurantName}</a>
                        </li>
                    </ul>
                </section>

                <section className="restaurant-info">
                    <p className="restaurant-info__heading">You are ordering from</p>
                    <h2 className="restaurant-info__name">{this.props.restaurantName}</h2>
                </section>
            </header>
        );
    }
}

export default CheckoutHeader;