import React from "react";

class RestaurantShowcaseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const className = `restaurant-card ${this.props.restaurantCard.extraClass}`;
        // const className = `restaurant-card restaurant-card--${this.props.restaurant.id}`;

        return (
            <article className={className} id={this.props.restaurantCard.id}>
                <a className="restaurant-card__link" href={`/restaurant-menu/${this.props.restaurantCard.id}`}>
                    <img className="restaurant-card__img" src={this.props.restaurantCard.image} alt={this.props.restaurantCard.name} />
                    <div className="restaurant-card__name">{this.props.restaurantCard.name}</div>
                    <div className="restaurant-card__desc">{this.props.restaurantCard.desc}</div>
                </a>
            </article>
        );
    }
}

export default RestaurantShowcaseCard;