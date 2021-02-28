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
                    style={{ backgroundImage: `url(/assets/img/restaurants/${this.props.restaurant.image})` }}>
    
                <Breadcrumb restaurantName={this.props.restaurant.name} />
    
                <RestaurantInfo restaurant={this.props.restaurant} toggleLocationModal={this.props.toggleLocationModal} />
    
            </header>
        );
    }
}

export default RestaurantMenuHeader;