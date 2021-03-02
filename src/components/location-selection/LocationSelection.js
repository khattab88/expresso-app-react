import React from 'react';

import LocationList from './location-list/LocationList';

class LocationSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            searchText: "",
            selected: { id: "0", name: "Select your area"}
        };

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.search = this.search.bind(this);

        this.cities = [
            {
                id: "1", name: "Cairo",
                areas: [
                    { id: "1", name: "Heliopolis" },
                    { id: "2", name: "Zamalek" },
                    { id: "3", name: "DownTown" },
                    { id: "4", name: "Maadi" },
                    { id: "5", name: "Nasr City" },
                ]
            },
            {
                id: "2", name: "Giza",
                areas: [
                    { id: "6", name: "Mohandessien" },
                    { id: "7", name: "Dokki" },
                    { id: "8", name: "Giza Square" },
                    { id: "9", name: "Haram" },
                    { id: "10", name: "6th October" },
                ]
            }
        ];
    }

    componentDidMount() {}

    toggle(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    select(selected) {
        this.setState({ selected });

        this.toggle();
    }

    search(searchText) {
        this.setState({ searchText });
    }

    componentDidUpdate() {
        // console.log(this.state.isOpen);
        // console.log(this.state.searchText);
        // console.log(this.state.selected);
    }

    render() {
        const className = this.state.isOpen ?"location-selection__btn location-selection__btn--open" :"location-selection__btn";

        return (
            <div className="location-selection">
                <button className={className} onClick={this.toggle}>
                    <i className="location-selection__icon-location material-icons-outlined">location_on</i>
                    <p className="location-selection__value" data-selected={this.state.selected.id}>{this.state.selected.name}</p>
                    <i className="location-selection__icon-caret location-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i className="location-selection__icon-caret location-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>
                <LocationList isOpen={this.state.isOpen} cities={this.cities} select={this.select} searchText={this.state.searchText} search={this.search} />
            </div>
        );
    }
}

export default LocationSelection;