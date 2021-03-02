import React from 'react';

import Breadcrumb from './breadcrumb/Breadcrumb';

// import Filters from './filters/Filters';
import DropdownFilter from './filters/dropdown-filter/DropdownFilter';
import CheckboxFilter from './filters/checkbox-filter/CheckboxFilter';
import GridFilter from './filters/grid-filter/GridFilter';

import List from './list/List';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            selectedTags: [],
            specialOffers: false,
            gridLayout: "three",
        };

        this.getRestaurants = this.getRestaurants.bind(this);
        this.changeGridLayout = this.changeGridLayout.bind(this);
        this.checkSpecialOffers = this.checkSpecialOffers.bind(this);

        this.restaurants = [];
    }

    componentDidMount() {
        setTimeout(() => {

            this.restaurants = this.getRestaurants();

            this.setState({
                isLoading: false,
            });

        }, 3000);
    }

    componentDidUpdate() {
        console.log(this.state);
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
                img: "url(/assets/img/restaurants/rest-00.jpg)",
                tags: [
                    { id: "1", name: "Offers" },
                    { id: "2", name: "Fast Food" },
                    { id: "3", name: "American" }
                ]
            }
        ];
    }

    changeGridLayout(layout) {
        this.setState({
            gridLayout: layout
        });
    }

    checkSpecialOffers(checked) {
        this.setState({
            specialOffers: checked
        });
    }

    render() {
        return (
            <main className="main RestaurantList">

                <Breadcrumb />

                <section className="restaurant-list-filter">
                    <DropdownFilter />

                    <CheckboxFilter specialOffers={this.state.specialOffers} checkSpecialOffers={this.checkSpecialOffers} />

                    <GridFilter gridLayout={this.state.gridLayout} changeGridLayout={this.changeGridLayout} />
                </section>

                <List restaurants={this.restaurants} isLoading={this.state.isLoading} />

            </main>
        );
    }
}

export default RestaurantList; 