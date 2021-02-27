import React from 'react';

class CityItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="location-selection__city" id={this.props.city.id}>
                <div className="location-selection__city-name">{this.props.city.name}</div>
                <ul className="location-selection__area-list">
                    {this.props.children}
                </ul>
            </li>
        );
    }
}

export default CityItem;