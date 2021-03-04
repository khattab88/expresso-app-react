import React from 'react';

import RestaurantItem from '../restaurant-item/RestaurantItem';

class RestaurantList extends React.Component {
    constructor(props) {
        super(props);

        this.renderBranches = this.renderBranches.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onSearch(e) {
        const value = e.target.value;
        
        this.props.search(value);
    }

    renderBranches() {
        let branchList = null;

        const filtered = this.props.branches.filter(branch => branch.name.toLowerCase().includes(this.props.searchText));

        branchList = filtered.map((branch) =>
            <RestaurantItem branch={branch} key={branch.id} select={this.props.select} />
        );

        return branchList;
    }

    render() {
        return (
            <ul className="restaurant-selection__restaurant-list">
                {this.renderBranches()}
            </ul>
        );
    }
}

export default RestaurantList;