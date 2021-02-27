import React from 'react';

import RestaurantList from './restaurant-list/RestaurantList';

class RestaurantSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            selected: {
                id: "0", 
                name: "Find a restaurant",
                areaId: "0"
            }
        };

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);

        this.restaurants = [
            { id: "1", name: "McDonald's", areaId: "1" },
            { id: "2", name: "KFC", areaId: "1" },
            { id: "3", name: "Pizza Hut", areaId: "1" },
            { id: "4", name: "Burger King", areaId: "1" },
            { id: "5", name: "Cook Door", areaId: "1" },
        ];
    }

    toggle(e) {
        this.setState({ isOpen: !this.state.isOpen });
    }

    select(e) {
        const id = e.target.id;
        const name = e.target.textContent;
        const areaId = e.target.dataset["area"];

        this.setState({
            selected: { id, name, areaId }
        });

        this.toggle();
    }

    render() {

        const btnClassName = this.state.isOpen 
                                ? "restaurant-selection__btn restaurant-selection__btn--open"
                                : "restaurant-selection__btn";
        const boxClassName = this.state.isOpen
                                ? "restaurant-selection__box restaurant-selection__box--open"
                                : "restaurant-selection__box";

        return (
            <div className="restaurant-selection">
                <button className={btnClassName} onClick={this.toggle}>
                    <i className="restaurant-selection__icon-store material-icons">search</i>
                    <p className="restaurant-selection__value" 
                        data-selected-id={this.state.selected.id} 
                        data-selected-area={this.state.selected.areaId}>
                        {this.state.selected.name}
                    </p>
                    <i className="restaurant-selection__icon-caret restaurant-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i className="restaurant-selection__icon-caret restaurant-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>
                <div className={boxClassName}>
                    <input type="text" className="restaurant-selection__input" />
                    <RestaurantList restaurants={this.restaurants} onSelect={this.select} />
                </div>
            </div>
        );
    }
}

export default RestaurantSelection;