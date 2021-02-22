import React from 'react';

import Breadcrumb from './breadcrumb/Breadcrumb';
import Filters from './filters/Filters';
import List from './list/List';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main RestaurantList">

                <Breadcrumb />

                <Filters />

                <List />

            </main>
        );
    }
}

export default RestaurantList; 