import React from 'react';

class AreaItem extends React.Component{
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        const selected = {
            id: e.target.id,
            name: e.target.textContent
        };

        this.props.select(selected);
    }

    render() {
        return(
            <li className="location-selection__area" onClick={this.handleClick} id={this.props.area.id}>{this.props.area.name}</li>
        );
    }
}

export default AreaItem;