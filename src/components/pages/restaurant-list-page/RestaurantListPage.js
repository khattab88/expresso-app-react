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

        this.ref = React.createRef();

        this.state = {
            area: { id: 0 },
            branches: [],
            err: null,
        };

        this.onAreaChange = this.onAreaChange.bind(this);
    }

    async componentDidMount() {

        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        /// Heliopolis is the default area
        const areaResponse = await areaApi.getAreaBySlug("heliopolis");
        if(areaResponse.err) {
            return this.setState({ err: areaResponse.err});
        } else {
            return this.populateAreaBranches(areaResponse.data);
        }
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
            <div className="RestaurantList" ref={this.ref} >
                <Nav />
                <RestaurantListHeader onAreaChange={this.onAreaChange} />
                <RestaurantList area={this.state.area} branches={this.state.branches} />
                <Footer />
            </div>
        );
    }
}

export default RestaurantListPage;