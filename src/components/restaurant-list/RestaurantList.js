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
            tags: [],
            selectedTags: [],
            restaurants: [],
            filteredRestaurants: [],
            specialOffers: false,
            gridLayout: "three",
        };

        this.getTags = this.getTags.bind(this);
        this.getRestaurants = this.getRestaurants.bind(this);

        this.changeGridLayout = this.changeGridLayout.bind(this);
        this.checkSpecialOffers = this.checkSpecialOffers.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            
            const restaurants = this.getRestaurants();

            this.setState({
                isLoading: false,
                tags: this.getTags(),
                restaurants,
                filteredRestaurants: [...restaurants]
            });

        }, 1000);
    }

    componentDidUpdate() {
        console.log(this.state);
    }

    getTags() {
        return [
            { id: "1", name: "Offers"},
            { id: "2", name: "Fast Food"},
            { id: "3", name: "American"},
            { id: "4", name: "Arabic"},
            { id: "5", name: "Italian"},
            { id: "6", name: "Sea Food"},
            { id: "7", name: "Indian"},
        ];
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
                specialOffers: true,
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
                specialOffers: true,
                img: "url(/assets/img/restaurants/rest-00.jpg)",
                tags: [
                    { id: "1", name: "Offers" },
                    { id: "2", name: "Fast Food" },
                    { id: "3", name: "American" }
                ]
            },
            {
                id: "3",
                name: "Hardees",
                slogan: "Finger lickin",
                areaId: "1",
                deliveryTime: 35,
                specialOffers: false,
                img: "url(/assets/img/restaurants/web_hardees_Image_from_iOS.png)",
                tags: [
                    { id: "2", name: "Fast Food" },
                ]
            },
            {
                id: "4",
                name: "Burger King",
                slogan: "Finger lickin",
                areaId: "1",
                deliveryTime: 35,
                specialOffers: true,
                img: "url(/assets/img/restaurants/rest-01.jpg)",
                tags: [
                    { id: "2", name: "Fast Food" },
                    { id: "3", name: "American" }
                ]
            },
            {
                id: "5",
                name: "Sea King",
                slogan: "Finger lickin",
                areaId: "1",
                deliveryTime: 35,
                specialOffers: false,
                img: "url(/assets/img/restaurants/rest-05.jpg)",
                tags: [
                    { id: "6", name: "Sea Food" }
                ]
            },
            {
                id: "6",
                name: "India Gate",
                slogan: "Finger lickin",
                areaId: "1",
                deliveryTime: 35,
                specialOffers: false,
                img: "url(/assets/img/restaurants/rest-06.jpg)",
                tags: [
                    { id: "7", name: "Indian" }
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
        let filtered = (checked) 
                          ? this.state.restaurants.filter(restaurant => restaurant.specialOffers)
                          : this.state.restaurants;

        this.setState({
            specialOffers: checked,
            filteredRestaurants: filtered
        });
    }

    render() {
        return (
            <main className="main RestaurantList">
                <Breadcrumb />

                <section className="restaurant-list-filter">
                    <DropdownFilter tags={this.state.tags} />

                    <CheckboxFilter specialOffers={this.state.specialOffers} checkSpecialOffers={this.checkSpecialOffers} />

                    <GridFilter gridLayout={this.state.gridLayout} changeGridLayout={this.changeGridLayout} />
                </section>

                <List restaurants={this.state.filteredRestaurants} isLoading={this.state.isLoading} layout={this.state.gridLayout} />
            </main>
        );
    }
}

export default RestaurantList; 