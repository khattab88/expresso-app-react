import React from 'react';

import areaApi from '../../../api/AreaApi';
import branchApi from '../../../api/BranchApi';

import Nav from "../../nav/Nav";
import Header from "../../headers/restaurant-list-header/RestaurantListHeader";
import Footer from "../../footer/Footer";
import RestaurantListHeader from '../../headers/restaurant-list-header/RestaurantListHeader'
import RestaurantList from '../../restaurant-list/RestaurantList';

class RestaurantListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            area: { id: 0 },
            branches: [],
            err: null,
        };

        this.onAreaChange = this.onAreaChange.bind(this);
    }

    async componentDidMount() {
        const defaultArea = (await areaApi.getAreaById("b6b087bf-6f7a-4902-8c59-b2b05f787812")).data;
        // console.log(defaultArea); //Heliopolis

        return this.populateAreaBranches(defaultArea);
    }

    async onAreaChange(area) {
        return this.populateAreaBranches(area);
    }

    async populateAreaBranches(area) {
        const branchesResponse = await branchApi.getBranchesByArea(area.id);
        if(branchesResponse.err) {
            this.setState({ err: branchesResponse.err});
        } else {
            this.setState({
                area,
                branches: branchesResponse.data
            });
        }
    }

    render() {
        return (
            <div className="RestaurantList">
                <Nav />
                <RestaurantListHeader onAreaChange={this.onAreaChange} />
                <RestaurantList area={this.state.area} branches={this.state.branches} />
                <Footer />
            </div>
        );
    }
}

export default RestaurantListPage;