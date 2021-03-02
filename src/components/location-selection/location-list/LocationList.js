import React from 'react';
import _ from 'lodash';

import CityItem from '../city-item/CityItem';
import AreaItem from '../area-item/AreaItem';

class LocationList extends React.Component {
    constructor(props) {
        super(props);

        this.filtered = [];

        this.createList = this.createList.bind(this);
        this.filterList = this.filterList.bind(this);
        this.renderList = this.renderList.bind(this);
        this.renderLocations = this.renderLocations.bind(this);

        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {
        // const final = this.filterList();
        // console.log(final);
    }

    onInputChange(e) {
        const value = e.target.value;

        this.props.search(value);
    }

    createList() {
        let areas = [];
        this.props.cities.forEach(city => {
            city.areas.forEach(area => {
                
                let areaCity = {...city};
                delete areaCity.areas;

                area.city = areaCity;
                areas.push(area);
            });
        });

        console.log(areas);
    }

    filterList() {
        const value = this.props.searchText;

        this.props.cities.forEach(city => {
            city.areas.forEach(area => {
                if (area.name.toLowerCase().includes(value.toLowerCase())) {
                    area.cityId = city.id;
                    area.cityName = city.name;
                    this.filtered.push(area);
                }
            });
        });

        let filtered = _.groupBy(this.filtered, area => area.cityId);

        const final = [];
        for (const group in filtered) {

            const areas = filtered[group].map(g => {
                const area = {};
                area.id = g.id;
                area.name = g.name;

                return area;
            });

            const city = {};
            city.id = filtered[group][0].cityId;
            city.name = filtered[group][0].cityName;

            city.areas = areas;

            final.push({key: group, city});
        }

        return final;
    }

    renderList() {
        let list = this.filterList();
        console.log(list);

        const cityList = list.map((g) => {

            const areaList = g.city.areas.map((area) =>
                <AreaItem area={area} key={area.id} select={this.props.select} />
            );

            return (
                <CityItem city={g.city} key={g.city.id}>
                    {areaList}
                </CityItem>
            );
        });

        return cityList;
    }

    renderLocations() {
        const cityList = this.props.cities.map((city) => {

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
        const className = this.props.isOpen ?"location-selection__box location-selection__box--open" :"location-selection__box";

        return (
            <div className={className}>
                <input type="text" className="location-selection__input" value={this.props.searchText} onChange={this.onInputChange} />
                <ul className="location-selection__city-list">
                    {this.renderLocations()}
                </ul>
            </div>
        );
    }
}

export default LocationList;