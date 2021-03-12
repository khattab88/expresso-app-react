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

        const restaurantList = this.props.branches.map((branch) =>
            <Card restaurant={branch.restaurant} key={branch.id} />
        );

        return (
            <section className={`restaurant-list grid-cols-${gridCols}`} style={{ position: "relative" }}>

                <Loader isLoading={this.props.isLoading} />

                {(this.props.branches.length == 0 && !this.props.isLoading) &&  
                    <EmptyList />
                }

                {restaurantList}

            </section>
        );
    }
}

export default List;