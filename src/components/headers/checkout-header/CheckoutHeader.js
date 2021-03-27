import React from 'react';
import { connect } from "react-redux";

class CheckoutHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header checkout-page__header" style={{ backgroundImage: `url(${this.props.branch.restaurant.image})` }}>
                <section className="breadcrumb">
                    <ul className="breadcrumb__list">
                        <li className="breadcrumb__item breadcrumb__item--back">
                            <i className="material-icons">chevron_left</i>
                        </li>
                        <li className="breadcrumb__item">
                            <span className="breadcrumb__separator">/</span>
                        </li>
                        <li className="breadcrumb__item breadcrumb__item--current">
                            <a className="breadcrumb__link" href="#">{this.props.branch.restaurant.name}</a>
                        </li>
                    </ul>
                </section>

                <section className="restaurant-info">
                    <p className="restaurant-info__heading">You are ordering from</p>
                    <h2 className="restaurant-info__name">{this.props.branch.restaurant.name}</h2>
                </section>
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        branch: state.selectedBranch
    }
}

export default connect(mapStateToProps)(CheckoutHeader);