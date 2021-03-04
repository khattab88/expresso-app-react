import React from 'react';

class AreaItem extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.select(e);
    }

    render() {
        return(
            <li className="location-selection__area" onClick={this.handleClick} id={this.props.area.id}>{this.props.area.name}</li>
        );
    }
}

export default AreaItem;