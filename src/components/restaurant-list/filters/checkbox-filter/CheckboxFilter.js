import React from 'react';

class CheckboxFilter extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const checked = e.target.checked;
        // console.log(checked);

        this.props.checkSpecialOffers(checked);
    }

    render() {
        return (
            <div className="filter-checkbox">
                <input className="filter-checkbox__input" type="checkbox" name="special-offers" id="special-offers" checked={this.props.specialOffers} onChange={this.handleChange} />
                <label htmlFor="special-offers" className="filter-checkbox__title">Special Offers</label>
            </div>
        );
    }
}

export default CheckboxFilter;