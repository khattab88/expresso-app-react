import React from 'react';

import RestaurantList from './restaurant-list/RestaurantList';

class RestaurantSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            searchText: "",
        };

        this.ref = React.createRef();

        this.onToggle = this.onToggle.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.onSearch  = this.onSearch.bind(this);

        this.onBodyClick = this.onBodyClick.bind(this);
    }

    componentDidMount() {
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
            name: e.target.textContent,
            areaId: e.target.dataset["area"],
            restaurant: {
                id: e.target.dataset["restaurantId"],
                name: e.target.dataset["restaurantName"],
            }
        };

        // console.log(selected);

        this.props.select(selected);
    }

    onSearch(e) {
        const value = e.target.value;
        this.setState({ searchText: value });
    }

    render() {

        const btnClassName = this.state.isOpen 
                                ? "restaurant-selection__btn restaurant-selection__btn--open"
                                : "restaurant-selection__btn";
        const boxClassName = this.state.isOpen
                                ? "restaurant-selection__box restaurant-selection__box--open"
                                : "restaurant-selection__box";

        return (
            <div className="restaurant-selection" ref={this.ref}>
                <button className={btnClassName} onClick={this.onToggle}>
                    <i className="restaurant-selection__icon-store material-icons">search</i>
                    <p className="restaurant-selection__value" 
                        data-selected-id={this.props.selected.id} 
                        data-selected-area={this.props.selected.areaId}>
                        {this.props.selected.name}
                    </p>
                    <i className="restaurant-selection__icon-caret restaurant-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i className="restaurant-selection__icon-caret restaurant-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>

                <div className={boxClassName}>
                    <input type="text" className="restaurant-selection__input" onChange={this.onSearch} />
                    <RestaurantList 
                        branches={this.props.branches} isOpen={this.state.isOpen} select={this.onSelect}
                        searchText={this.state.searchText} search={this.onSearch} />
                </div>
            </div>
        );
    }
}

export default RestaurantSelection;