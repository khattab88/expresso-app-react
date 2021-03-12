import React from 'react';

import RestaurantShowcaseHeader from './restaurant-showcase-header/RestaurantShowcaseHeader';
import RestaurantShowcaseList from './restaurant-showcase-list/RestaurantShowcaseList';
import RestaurantShowcaseCard from './restaurant-showcase-card/RestaurantShowcaseCard';
import LinkButton from '../shared/buttons/link-button/LinkButton';

import areaApi from '../../api/AreaApi';
import branchApi from '../../api/BranchApi';
import { rest } from 'lodash';

class RestaurantShowcase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            area: {},
            branches: [],
            err: null
        }
    }

    async componentDidMount() {
        // const callback = () => this.setState({ isLoading: false });

        const callback = async () => {
            const branchesResponse = await this.getBranchesByArea(this.state.area.id);
            if (branchesResponse.err) {
                this.setState({
                    err: branchesResponse.err,
                }, () => this.setState({ isLoading: false }));
            } else {
                console.log(branchesResponse.data);
                this.setState({
                    branches: branchesResponse.data
                }, () => this.setState({ isLoading: false }));
            }

        };

        const defaultArea = "b6b087bf-6f7a-4902-8c59-b2b05f787812"; // Heliopolis
        const areaResponse = await this.getArea(defaultArea);
        if (areaResponse.err) {
            this.setState({
                err: areaResponse.err,
            }, () => this.setState({ isLoading: false }))
        } else {
            // console.log(areaResponse.data);
            this.setState({
                area: areaResponse.data
            }, callback);
        }

        // this.setState({
        //     restaurants: [
        //         {
        //             id: '1',
        //             name: 'Wrap Its',
        //             desc: 'Tasty and fresh food',
        //             img: '/assets/img/restaurants/rest-01.jpg'
        //         },
        //         {
        //             id: '2',
        //             name: 'Wrap Ito',
        //             desc: 'Tasty and fresh food',
        //             img: '/assets/img/restaurants/rest-02.jpg'
        //         },
        //         {
        //             id: '3',
        //             name: 'Wrap Ita',
        //             desc: 'Tasty and fresh food',
        //             img: '/assets/img/restaurants/rest-03.jpg'
        //         },
        //         {
        //             id: '4',
        //             name: 'Wrap Ite',
        //             desc: 'Tasty and fresh food',
        //             img: '/assets/img/restaurants/rest-04.jpg'
        //         },
        //         {
        //             id: '5',
        //             name: 'Wrap Itw',
        //             desc: 'Tasty and fresh food',
        //             img: '/assets/img/restaurants/rest-05.jpg'
        //         },
        //         {
        //             id: '6',
        //             name: 'Wrap Itu',
        //             desc: 'Tasty and fresh food',
        //             img: '/assets/img/restaurants/rest-06.jpg'
        //         },
        //         {
        //             id: '7',
        //             name: 'Wrap Iti',
        //             desc: 'Tasty and fresh food',
        //             img: '/assets/img/restaurants/rest-07.jpg'
        //         },
        //     ]
        // }, callback);
    }

    async getArea(areaId) {
        const response = areaApi.getAreaById(areaId);
        return response;
    }

    async getBranchesByArea(areaId) {
        // const defaultArea = 
        const response = branchApi.getBranchesByArea(areaId);
        return response;
    }

    render() {
        const restaurantCards = this.state.branches.map((branch, index) => {
            const card = {
                id: branch.id,
                restaurantId: branch.restaurant.id,
                name: branch.restaurant.name,
                desc: branch.restaurant.desc,
                image: branch.restaurant.image,
                extraClass: (index === 0) ? "restaurant-card--big" : `restaurant-card--${index}`
            }

            return <RestaurantShowcaseCard restaurantCard={card} key={card.id} />
        });

        return (
            <main className="main">
                <div className="showcase">
                    <RestaurantShowcaseHeader />

                    {restaurantCards}

                    <LinkButton className="showcase__show-all" href="#" title="Show All Restaurants" />
                </div>
            </main>
        );
    }
}

export default RestaurantShowcase;