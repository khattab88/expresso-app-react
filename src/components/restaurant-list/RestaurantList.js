import React from 'react';

import Breadcrumb from './breadcrumb/Breadcrumb';
import Filters from './filters/Filters';
import List from './list/List';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);

        this.changeGridLayout = this.changeGridLayout.bind(this);

        this.state = {
            isLoading: true,
            gridLayout: "three",
            restaurants: []
        };
    }

    componentDidMount() {
        setTimeout(() => {

            this.setState({
                isLoading: false,
                restaurants: this.getRestaurants()
            });

        }, 3000);
    }

    changeGridLayout(e) {
        // console.log(e.target);

        e.preventDefault();

        const gridBtn = e.target.parentElement;
        const gridCols = gridBtn.dataset["gridCols"];

        console.log(gridCols);

    }

    getRestaurants() {
        // return [];

        return [
            {
                id: "1",
                name: "McDonald's",
                slogan: "I'm lovin it",
                areaId: "1",
                deliveryTime: 30,
                img: "url(/assets/img/restaurants/web_cover_Mcd.png)",
                tags: [
                    { id: "1", name: "Offers" },
                    { id: "2", name: "Fast Food" }
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
                    { id: "1", name: "Offers" },
                    { id: "2", name: "Fast Food" },
                    { id: "3", name: "American" }
                ]
            }
        ];
    }

    render() {
        return (
            <main className="main RestaurantList">

                <Breadcrumb />

                <Filters gridLayout={this.state.gridLayout} onChangeLayout={this.changeGridLayout} />

                <List restaurants={this.state.restaurants} isLoading={this.state.isLoading} />

            </main>
        );
    }
}

export default RestaurantList; 