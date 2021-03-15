import React from 'react';

class RestaurantInfo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section className="restaurant-info-box">
                <div className="restaurant-info-box__head">
                    <h2 className="restaurant-info-box__head-title">{this.props.branch.restaurant.name}</h2>
                    <p className="restaurant-info-box__head-desc">{this.props.branch.restaurant.slogan}</p>
                </div>
                <div className="restaurant-delivery">
                    <h5 className="restaurant-delivery__heading">Delivery Location</h5>
                    <div className="change-location">
                        <p className="change-location__location">{this.props.branch.area.name}</p>
                        <button className="change-location__btn" onClick={this.props.toggleLocationModal}>Change Location</button>
                    </div>
                    <em className="restaurant-delivery__footer">Average delivery time: {this.props.branch.restaurant.deliveryTime} mins</em>
                </div>
            </section>
        );
    }
}

export default RestaurantInfo;