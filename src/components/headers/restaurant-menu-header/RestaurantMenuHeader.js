import React from 'react';

import Breadcrumb from './breadcrumb/Breadcrumb';
import RestaurantInfo from './restaurant-info/RestaurantInfo';

class RestaurantMenuHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className="header restaurant-menu-page__header" 
                style={{ backgroundImage: `url(${this.props.branch.restaurant.image})` }} >
    
                <Breadcrumb restaurantName={this.props.branch.restaurant.name} />
    
                <RestaurantInfo branch={this.props.branch} toggleLocationModal={this.props.toggleLocationModal} />
    
            </header>
        );
    }
}

export default RestaurantMenuHeader;