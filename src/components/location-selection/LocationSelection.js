import React from 'react';

import LocationList from './location-list/LocationList';

class LocationSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.onToggle = this.onToggle.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() { }

    onToggle(e) {
       this.setState({
           isOpen: !this.state.isOpen
       });
    }

    onSelect(e) {
        this.onToggle();

        const selected = {
            id: e.target.id,
            name: e.target.textContent
        };

        this.props.select(selected);
    }

    componentDidUpdate() {
        // console.log(this.state.isOpen);
        // console.log(this.state.searchText);
    }

    render() {
        const className = this.state.isOpen ?"location-selection__btn location-selection__btn--open" :"location-selection__btn";

        return (
            <div className="location-selection">
                <button className={className} onClick={this.onToggle}>
                    <i className="location-selection__icon-location material-icons-outlined">location_on</i>
                    <p className="location-selection__value" data-selected={this.props.selected.id}>{this.props.selected.name}</p>
                    <i className="location-selection__icon-caret location-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i className="location-selection__icon-caret location-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>
                
                <LocationList cities={this.props.locations} isOpen={this.state.isOpen} select={this.onSelect} />
            </div>
        );
    }
}

export default LocationSelection;