import React from "react";

class RestaurantShowcaseCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const className = `restaurant-card ${this.props.restaurant.extraClass}`;
        // const className = `restaurant-card restaurant-card--${this.props.restaurant.id}`;

        return (
            <article className={className} id={this.props.restaurant.id}>
                <a className="restaurant-card__link" href={this.props.restaurant.href}>
                    <img className="restaurant-card__img" src={this.props.restaurant.image} alt={this.props.restaurant.name} />
                    <div className="restaurant-card__name">{this.props.restaurant.name}</div>
                    <div className="restaurant-card__desc">{this.props.restaurant.desc}</div>
                </a>
            </article>
        );
    }
}

export default RestaurantShowcaseCard;