import React from 'react';

import tagApi from '../../api/TagApi';
import branchApi from '../../api/BranchApi';

import Breadcrumb from './breadcrumb/Breadcrumb';
import DropdownFilter from './filters/dropdown-filter/DropdownFilter';
import CheckboxFilter from './filters/checkbox-filter/CheckboxFilter';
import GridFilter from './filters/grid-filter/GridFilter';
import List from './list/List';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            tags: [],
            selectedTags: [],
            tagsLoadingError: null,
            restaurants: [],
            filteredRestaurants: [],
            specialOffers: false,
            gridLayout: "three",
        };

        this.getTags = this.getTags.bind(this);
        this.getRestaurants = this.getRestaurants.bind(this);

        this.changeGridLayout = this.changeGridLayout.bind(this);
        this.checkSpecialOffers = this.checkSpecialOffers.bind(this);
        this.changeTags = this.changeTags.bind(this);
        this.clearTags = this.clearTags.bind(this);

        this.filter = this.filter.bind(this);
    }

    async componentDidMount() {

        const tagsResponse = await this.getTags();
        if (tagsResponse.err) {
            // console.log(tagsResponse.err);
            this.setState({
                tagsLoadingError: tagsResponse.err
            });
        } else {
            this.setState({
                tags: tagsResponse.data,
                selectedTags: {},
            });
        }

        // this.setState({
        //     isLoading: false,
        //     restaurants,
        //     filteredRestaurants: [...restaurants]
        // });

        // const restaurants = this.getRestaurants();
        // this.setState({
        //     isLoading: false,
        //     restaurants,
        //     filteredRestaurants: [...restaurants]
        // });
    }

    componentDidUpdate() {
        // console.log(this.props.area);
    }

    async getTags() {
        let tags = [];

        // tags = [
        //     { id: "1", name: "Offers" },
        //     { id: "2", name: "Fast Food" },
        //     { id: "3", name: "American" },
        //     { id: "4", name: "Arabic" },
        //     { id: "5", name: "Italian" },
        //     { id: "6", name: "Sea Food" },
        //     { id: "7", name: "Indian" },
        // ];

        const response = await await tagApi.getTags();
        return response;
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
        this.setState({
            specialOffers: checked,
        },
            this.filter);
    }

    changeTags(selectedTag) {
        // console.log(selectedTag);

        const selectedTags = { ...this.state.selectedTags };
        if (selectedTag.selected === "true") {
            selectedTags[selectedTag.id] = true;
        } else {
            delete selectedTags[selectedTag.id];
        }

        this.setState({ selectedTags }, this.filter);
    }

    clearTags() {
        this.setState({ selectedTags: {} }, this.filter);
    }


    filter() {
        let filteredRestaurants = [];

        // filter by special offers
        filteredRestaurants = (this.state.specialOffers)
            ? this.props.branches.filter(branch => branch.restaurant.specialOffers)
            : this.props.branches;


        // filter by selected tags
        if (Object.keys(this.state.selectedTags).length > 0) {
            let final = {};

            Object.keys(this.state.selectedTags).forEach(tagId => {
                filteredRestaurants.forEach(rest => {
                    const restTags = rest.restaurant.tags.map(t => t.id);
                    if (restTags.indexOf(tagId) > -1) final[rest.id] = rest;
                });
            });

            // return this.setState({ filteredRestaurants: Object.values(final) });
            return Object.values(final)
        }

        // update filtered restaurants
        // return this.setState({ filteredRestaurants: filteredRestaurants });
        return filteredRestaurants;
    }

    render() {
        return (
            <main className="main RestaurantList">
                <Breadcrumb />

                <section className="restaurant-list-filter">
                    <DropdownFilter tags={this.state.tags} changeTags={this.changeTags} clearTags={this.clearTags} selectedTags={this.state.selectedTags} />

                    <CheckboxFilter specialOffers={this.state.specialOffers} checkSpecialOffers={this.checkSpecialOffers} />

                    <GridFilter gridLayout={this.state.gridLayout} changeGridLayout={this.changeGridLayout} />
                </section>

                <List branches={this.filter()} isLoading={this.state.isLoading} layout={this.state.gridLayout} />
            </main>
        );
    }
}

export default RestaurantList;