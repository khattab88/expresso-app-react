import React from 'react';

class EmptyList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="restaurant-list__empty-template">
                <h3>No results found</h3>
                <img src="/assets/img/icons/no_restaurants_icon.png" alt="no results" />
                <p>Please select another area or choose a filter types.</p>
            </div>
        );
    }
}

export default EmptyList;