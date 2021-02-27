import React from 'react';

class AreaItem extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <li className="location-selection__area" onClick={this.props.onSelect} id={this.props.area.id}>{this.props.area.name}</li>
        );
    }
}

export default AreaItem;