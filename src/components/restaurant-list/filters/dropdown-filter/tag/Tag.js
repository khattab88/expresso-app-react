import React from 'react';

class Tag extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="filter-dropdown__cuisine-item">
                <input type="checkbox" className="filter-dropdown__cuisine-checkbox" id={this.props.tag.id} />
                <label className="filter-dropdown__cuisine-name" htmlFor={this.props.tag.id}>{this.props.tag.name}</label>
            </li>
        );
    }
}

export default Tag;