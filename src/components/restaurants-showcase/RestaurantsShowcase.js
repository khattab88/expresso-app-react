import React from 'react';
import { Link } from "react-router-dom";


import areaApi from '../../api/AreaApi';
import branchApi from '../../api/BranchApi';

import RestaurantShowcaseHeader from './restaurant-showcase-header/RestaurantShowcaseHeader';
import RestaurantShowcaseList from './restaurant-showcase-list/RestaurantShowcaseList';
import RestaurantShowcaseCard from './restaurant-showcase-card/RestaurantShowcaseCard';
import LinkButton from '../shared/buttons/link-button/LinkButton';

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
                // console.log(branchesResponse.data);
                this.setState({
                    branches: branchesResponse.data
                }, () => this.setState({ isLoading: false }));
            }

        };

        // const defaultArea = "b6b087bf-6f7a-4902-8c59-b2b05f787812"; // Heliopolis

        const areaResponse = await this.getAreaBySlug("heliopolis");
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

    }

    async getArea(areaId) {
        const response = areaApi.getAreaById(areaId);
        return response;
    }

    async getAreaBySlug(slug) {
        const response = areaApi.getAreaBySlug(slug);
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

                    <Link className="showcase__show-all" to="/restaurant-list">Show All Restaurants</Link>
                </div>
            </main>
        );
    }
}

export default RestaurantShowcase;