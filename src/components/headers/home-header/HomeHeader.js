import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import cityApi from '../../../api/CityApi';

import LocationSelection from '../../location-selection/LocationSelection';

import { selectArea } from '../../../store/actions';

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

        const callback = () => {

            let defaultArea = null;

            if(Object.keys(this.props.selectedArea).length) {
                defaultArea = this.props.selectedArea;
            } else {
                defaultArea = this.state.locations[0].areas[0];
            }

            this.props.selectArea(defaultArea);

            this.setState({ selectedLocation: defaultArea })
        };

        const response = await this.getCities();
        if(response.err) {
            this.setState({
                err: response.err
            });
        } else {
            // console.log(response.data);
            this.setState({
                locations: response.data
            }, callback);
        }
    }

    async getCities() {
        const response = await cityApi.getCities();
        return response;
    }

    selectLocation(selected) {
        // console.log(selected);

        this.props.selectArea(selected);

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

                            <Link to="/restaurant-list" className="search__submit">Find Restaurant</Link>
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

export default connect(mapStateToProps, { selectArea })(HomeHeader);