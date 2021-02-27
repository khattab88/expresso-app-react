import React from 'react';

import CityItem from '../city-item/CityItem';
import AreaItem from '../area-item/AreaItem';

class LocationList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const cityList = this.props.cities.map((city) => {
            const areaList = city.areas.map((area) =>
                <AreaItem area={area} key={area.id} onSelect={this.props.onSelect} />
            );

            return (
                <CityItem city={city} key={city.id}>
                    {areaList}
                </CityItem>
            );
        });

        const className = this.props.isOpen ?"location-selection__box location-selection__box--open" :"location-selection__box";

        return (
            <div className={className}>
                <input type="text" className="location-selection__input" onChange={this.search} />
                <ul className="location-selection__city-list">
                    {cityList}
                </ul>
            </div>
        );
    }
}

export default LocationList;