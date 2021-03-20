import React from 'react';

import LocationList from './location-list/LocationList';

class LocationSelection extends React.Component {
    constructor(props) {
        super(props);

        this.ref = React.createRef();
        this.searchInputRef = React.createRef();

        this.state = {
            isOpen: false,
            searchText: "",
        };

        this.onToggle = this.onToggle.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onSearch  = this.onSearch.bind(this);

        this.onBodyClick = this.onBodyClick.bind(this);
    }

    componentDidMount() { 
        // console.log(this.searchInputRef); 

        document.body.addEventListener("click", this.onBodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.onBodyClick);
    }

    onBodyClick(e) {
        // console.log(e.target);

        if(this.ref.current && this.ref.current.contains(e.target)) {
            return;
        }

        this.setState({
            isOpen: false
        });
    };

    onToggle(e) {
       this.setState({
           isOpen: !this.state.isOpen,
           searchText: ""
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

    onSearch(searchText) {
        this.setState({ searchText });
    }

    componentDidUpdate() {
        // console.log(this.state.isOpen);
        // console.log(this.state.searchText);
    }

    render() {
        const className = this.state.isOpen ?"location-selection__btn location-selection__btn--open" :"location-selection__btn";

        return (
            <div className="location-selection" ref={this.ref}>
                <button className={className} onClick={this.onToggle}>
                    <i className="location-selection__icon-location material-icons-outlined">location_on</i>
                    <p className="location-selection__value" data-selected={this.props.selected.id}>{this.props.selected.name}</p>
                    <i className="location-selection__icon-caret location-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i className="location-selection__icon-caret location-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>
                
                <LocationList 
                    cities={this.props.locations} isOpen={this.state.isOpen} select={this.onSelect}
                    searchText={this.state.searchText} search={this.onSearch} searchInputRef={this.searchInputRef} />
            </div>
        );
    }
}

export default LocationSelection;