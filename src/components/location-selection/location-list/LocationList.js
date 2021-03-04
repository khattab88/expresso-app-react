import React from 'react';
import _ from 'lodash';

import CityItem from '../city-item/CityItem';
import AreaItem from '../area-item/AreaItem';

class LocationList extends React.Component {
    constructor(props) {
        super(props);

        this.flatten = this.flatten.bind(this);
        this.filter = this.filter.bind(this);
        this.group = this.group.bind(this);

        this.renderLocations = this.renderLocations.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    componentDidMount() {
        // this.setState({
        //     filtered: this.props.cities
        // });
    }

    onSearch(e) {
        const value = e.target.value;
        
        this.props.search(value);
    }

    flatten(list) {
        let areas = [];
        list.forEach(city => {
            city.areas.forEach(area => {

                let areaCity = { ...city };
                delete areaCity.areas;

                area.city = areaCity;
                areas.push(area);
            });
        });

        return areas;
    }

    filter(list) {
        const value = this.props.searchText;
        const filtered = list.filter(area => area.name.toLowerCase().includes(this.props.searchText.toLowerCase()));
        return filtered;
    }

    group(list) {
        let grouped = _.groupBy(list, area => area.city.id);

        const final = [];
        for (const group in grouped) {

            const areas = grouped[group].map(g => {
                const area = {};
                area.id = g.id;
                area.name = g.name;

                return area;
            });

            const city = {};
            city.id = grouped[group][0].city.id;
            city.name = grouped[group][0].city.name;

            city.areas = areas;

            final.push(city);
        }

        return final;
    }

    renderLocations() {
        let cityList = null;

        const flattenList = this.flatten(this.props.cities);
        const filteredList = this.filter(flattenList);
        const finalList = this.group(filteredList);

        cityList = finalList.map((city) => {
            const areaList = city.areas.map((area) =>
                <AreaItem area={area} key={area.id} select={this.props.select} />
            );

            return (
                <CityItem city={city} key={city.id}>
                    {areaList}
                </CityItem>
            );
        });

        return cityList;
    }

    render() {
        const className = this.props.isOpen ? "location-selection__box location-selection__box--open" : "location-selection__box";

        return (
            <div className={className}>
                <input type="text" className="location-selection__input" ref={this.props.searchInput} value={this.props.searchText} onChange={this.onSearch} />
                <ul className="location-selection__city-list">
                    {this.renderLocations()}
                </ul>
            </div>
        );
    }
}

export default LocationList;