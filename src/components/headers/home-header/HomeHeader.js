import React from 'react';

import cityApi from '../../../api/CityApi';

import LocationSelection from '../../location-selection/LocationSelection';


class HomeHeader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locations: [],
            selectedLocation: { id: "0", name: "Select your area"},
            err: null
        };

        this.selectLocation = this.selectLocation.bind(this);
    }

    async componentDidMount() {
        const response = await this.getCities();
        if(response.err) {
            this.setState({
                err: response.err
            });
        } else {
            // console.log(response.data);
            this.setState({
                locations: response.data
            });
        }

        // this.setState({
        //     locations: [
        //         {
        //             id: "1", name: "Cairo",
        //             areas: [
        //                 { id: "1", name: "Heliopolis" },
        //                 { id: "2", name: "Zamalek" },
        //                 { id: "3", name: "DownTown" },
        //                 { id: "4", name: "Maadi" },
        //                 { id: "5", name: "Nasr City" },
        //             ]
        //         },
        //         {
        //             id: "2", name: "Giza",
        //             areas: [
        //                 { id: "6", name: "Mohandessien" },
        //                 { id: "7", name: "Dokki" },
        //                 { id: "8", name: "Giza Square" },
        //                 { id: "9", name: "Haram" },
        //                 { id: "10", name: "6th October" },
        //             ]
        //         }
        //     ]
        // });
    }

    async getCities() {
        const response = await cityApi.getCities();
        return response;
    }

    selectLocation(selected) {
        // console.log(selected);

        this.setState({
            selectedLocation: selected
        });
    }

    render() {
        return (
            <header className="header home-page__header">
                <div className="search">
                    <h2 className="search__title">Find your favorite restaurants, We deliver.</h2>
                    <div className="search__box">
                        <div className="search__form">

                            <div className="search__input location-selection-wrapper">
                                <LocationSelection 
                                    locations={this.state.locations}
                                    selected={this.state.selectedLocation} select={this.selectLocation} />
                            </div>

                            <a href="/restaurant-list" className="search__submit">Find Restaurant</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HomeHeader;