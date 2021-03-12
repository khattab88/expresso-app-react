import React from 'react';

import cityApi from '../../../api/CityApi';
import branchApi from '../../../api/BranchApi';

import LocationSelection from '../../location-selection/LocationSelection';
import RestaurantSelection from '../../restaurant-selection/RestaurantSelection';

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
            const defaultArea = this.state.locations[0].areas[0]; //Heliopolis
            const branchesResponse = await this.getBranchesByArea(defaultArea.id);

            if (branchesResponse.err) {
                this.setState({ err: branchesResponse.err });
            } else {
                // console.log(branchesResponse.data);
                this.setState({
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

        // const locations = [
        //     {
        //         id: "1", name: "Cairo",
        //         areas: [
        //             { id: "1", name: "Heliopolis" },
        //             { id: "2", name: "Zamalek" },
        //             { id: "3", name: "DownTown" },
        //             { id: "4", name: "Maadi" },
        //             { id: "5", name: "Nasr City" },
        //         ]
        //     },
        //     {
        //         id: "2", name: "Giza",
        //         areas: [
        //             { id: "6", name: "Mohandessien" },
        //             { id: "7", name: "Dokki" },
        //             { id: "8", name: "Giza Square" },
        //             { id: "9", name: "Haram" },
        //             { id: "10", name: "6th October" },
        //         ]
        //     }
        // ];

        // const branches = [
        //     {
        //         id: "1",
        //         name: "McDonalds's - Heliopolis Branch",
        //         areaId: "1",
        //         restaurant: {
        //             id: "1",
        //             name: "McDonalds's"
        //         }
        //     },
        //     {
        //         id: "2",
        //         name: "KFC - Heliopolis Branch",
        //         areaId: "1",
        //         restaurant: {
        //             id: "2",
        //             name: "KFC"
        //         }
        //     },
        //     {
        //         id: "3",
        //         name: "McDonalds's - Mohandessien Branch",
        //         areaId: "6",
        //         restaurant: {
        //             id: "1",
        //             name: "McDonalds's"
        //         }
        //     },
        //     {
        //         id: "4",
        //         name: "KFC - Mohandessien Branch",
        //         areaId: "6",
        //         restaurant: {
        //             id: "2",
        //             name: "KFC"
        //         }
        //     },
        //     {
        //         id: "5",
        //         name: "Pizza Hut - Heliopolis Branch",
        //         areaId: "1",
        //         restaurant: {
        //             id: "3",
        //             name: "Pizza Hut"
        //         }
        //     },
        //     {
        //         id: "6",
        //         name: "Burger King - Mohandessien Branch",
        //         areaId: "6",
        //         restaurant: {
        //             id: "4",
        //             name: "Burger King"
        //         }
        //     },
        // ];

        // this.setState({
        //     locations,
        //     branches,
        //     locationBranches: [...branches]
        // });
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

                            <button className="restaurant-search__submit" type="submit">Find Food</button>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default RestaurantListHeader;