import React from 'react';

import CityItem from './city-item/CityItem';
import AreaItem from './area-item/AreaItem';

class LocationSelection extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            selected: { id: "0", name: "Select your area"}
        };

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);

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

    select(e) {
        const id = e.target.id;
        const name = e.target.textContent;

        this.setState({
            selected: {
                id, name
            }
        });

        this.toggle();
    }

    render() {
        const cityList = this.cities.map((city) => {
            const areaList = city.areas.map((area) =>
                <AreaItem area={area} key={area.id} onSelect={this.select} />
            );

            return (
                <CityItem city={city} key={city.id}>
                    {areaList}
                </CityItem>
            );
        });

        // const selected = this.cities[0].areas[0];

        const btnClassName = this.state.isOpen ?"location-selection__btn location-selection__btn--open" :"location-selection__btn";
        const boxClassName = this.state.isOpen ?"location-selection__box location-selection__box--open" :"location-selection__box";

        return (
            <div className="location-selection">
                <button className={btnClassName} onClick={this.toggle}>
                    <i className="location-selection__icon-location material-icons-outlined">location_on</i>
                    <p className="location-selection__value" data-selected={this.state.selected.id}>{this.state.selected.name}</p>
                    <i className="location-selection__icon-caret location-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                    <i className="location-selection__icon-caret location-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
                </button>
                <div className={boxClassName}>
                    <input type="text" className="location-selection__input" />
                    <ul className="location-selection__city-list">
                        {cityList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default LocationSelection;