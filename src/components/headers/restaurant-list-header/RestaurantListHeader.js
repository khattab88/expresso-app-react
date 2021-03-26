import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import cityApi from '../../../api/CityApi';
import branchApi from '../../../api/BranchApi';

import LocationSelection from '../../location-selection/LocationSelection';
import RestaurantSelection from '../../restaurant-selection/RestaurantSelection';

import { selectArea } from '../../../store/actions';

class RestaurantListHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
            selectedLocation: { id: "0", name: "Select your area" },
            branches: [],
            locationBranches: [],
            selectedBranch: { id: "0", name: "Find a restaurant", areaId: "0" },
            err: null,
        };

        this.selectLocation = this.selectLocation.bind(this);
        this.selectBranch = this.selectBranch.bind(this);
    }

    async componentDidMount() {

        const callback = async () => {
            // const defaultArea = this.state.locations[0].areas[0]; //Heliopolis
            const area = this.props.selectedArea;
            const branchesResponse = await this.getBranchesByArea(area.id);

            if (branchesResponse.err) {
                this.setState({ err: branchesResponse.err });
            } else {
                // console.log(branchesResponse.data);
                this.setState({
                    selectedLocation: area,
                    branches: branchesResponse.data,
                    locationBranches: [...branchesResponse.data]
                });
            }
        };

        const locationsResponse = await this.getCities();
        if (locationsResponse.err) {
            this.setState({ err: locationsResponse.err })
        } else {
            // console.log(locationsResponse.data);

            this.setState({
                locations: locationsResponse.data,
            }, callback)
        }

    }

    async getCities() {
        const response = await cityApi.getCities();
        return response;
    }

    async getBranchesByArea(areaId) {
        // const defaultArea = 
        const response = branchApi.getBranchesByArea(areaId);
        return response;
    }

    async selectLocation(selected) {
        // console.log(selected);

        const callback = () => {
            this.props.onAreaChange(selected);
        }

        const selectedArea = selected;
        const branchesResponse = await this.getBranchesByArea(selectedArea.id);

        if (branchesResponse.err) {
            this.setState({ err: branchesResponse.err });
        } else {
            // console.log(branchesResponse.data);

            this.props.selectArea(selected);

            this.setState({
                selectedLocation: selected,
                locationBranches: branchesResponse.data
            }, callback);
        }
    }

    selectBranch(selected) {
        // console.log(selected);

        this.setState({
            selectedBranch: selected
        });
    }

    render() {
        const linkHref = (this.state.selectedBranch.id !== "0")
                            ? `/restaurant-menu/${this.state.selectedBranch.id}`
                            : "/restaurant-list";

        return (
            <header className="header restaurant-list-page__header">

                <div className="restaurant-search">
                    <h2 className="restaurant-search__title">Restaurants delivering to your city.</h2>
                    <div className="restaurant-search__box">
                        <div className="restaurant-search__form">

                            <div className="restaurant-search__input location-selection-wrapper">
                                <LocationSelection
                                    locations={this.state.locations}
                                    selected={this.state.selectedLocation} select={this.selectLocation} />
                            </div>

                            <div className="restaurant-search__input restaurant-selection-wrapper">
                                <RestaurantSelection
                                    branches={this.state.locationBranches}
                                    selected={this.state.selectedBranch} select={this.selectBranch} />
                            </div>

                            <Link className="restaurant-search__submit" to={linkHref}>Find Food</Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);

    return { selectedArea: state.selectedArea }
}

export default connect(mapStateToProps, { selectArea })(RestaurantListHeader);