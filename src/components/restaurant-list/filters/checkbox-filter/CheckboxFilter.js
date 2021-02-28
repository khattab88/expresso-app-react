import React from 'react';

class CheckboxFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter-checkbox">
                <input className="filter-checkbox__input" type="checkbox" name="special-offers" id="special-offers" />
                <label htmlFor="special-offers" className="filter-checkbox__title">Special Offers</label>
            </div>
        );
    }
}

export default CheckboxFilter;