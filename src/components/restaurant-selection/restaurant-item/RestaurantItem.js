import React from 'react';

class RestaurantItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="restaurant-selection__restaurant" 
                id={this.props.restaurant.id} 
                data-area={this.props.restaurant.areaId}
                onClick={this.props.onSelect}>
                {this.props.restaurant.name}
            </li>
        );
    }
}

export default RestaurantItem;