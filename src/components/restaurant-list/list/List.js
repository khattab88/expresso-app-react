import React from 'react';

import Loader from '../../shared/loader/Loader';
import Card from '../card/Card';
import EmptyList from '../empty-list/EmptyList';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const gridCols = this.props.layout;

        const restaurantList = this.props.restaurants.map((restaurant) =>
            <Card restaurant={restaurant} key={restaurant.id} />
        );

        return (
            <section className={`restaurant-list grid-cols-${gridCols}`} style={{ position: "relative" }}>

                <Loader isLoading={this.props.isLoading} />

                {(this.props.restaurants.length == 0 && !this.props.isLoading) &&  
                    <EmptyList />
                }

                {restaurantList}

            </section>
        );
    }
}

export default List;