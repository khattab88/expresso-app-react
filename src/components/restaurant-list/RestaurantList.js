import React from 'react';

import Breadcrumb from './breadcrumb/Breadcrumb';
import Filters from './filters/Filters';
import List from './list/List';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };

        this.restaurants = [
            {
                id: "1",
                name: "McDonald's",
                slogan: "I'm lovin it",
                areaId: "1",
                deliveryTime: 30,
                img: "url(/assets/img/restaurants/web_cover_Mcd.png)",
                tags: [
                    { id: "1", name: "Offers"},
                    { id: "2", name: "Fast Food"}
                ]
            },
            {
                id: "2",
                name: "KFC",
                slogan: "Finger lickin",
                areaId: "1",
                deliveryTime: 35,
                img: "url(/assets/img/restaurants/1900x1427.jpg)",
                tags: [
                    { id: "1", name: "Offers"},
                    { id: "2", name: "Fast Food"},
                    { id: "3", name: "American"}
                ]
            }
        ];
    
    }

    render() {
        return (
            <main className="main RestaurantList">

                <Breadcrumb />

                <Filters />

                <List restaurants={this.restaurants} isLoading={this.state.isLoading} />

            </main>
        );
    }
}

export default RestaurantList; 