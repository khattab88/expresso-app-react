import React from 'react';

class RestaurantItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="restaurant-selection__restaurant" 
                id={this.props.branch.id} 
                data-area={this.props.branch.areaId}
                data-restaurant-id={this.props.branch.restaurant.id} 
                data-restaurant-name={this.props.branch.restaurant.name}
                onClick={this.props.select}>
                    {this.props.branch.restaurant.name}
            </li>
        );
    }
}

export default RestaurantItem;