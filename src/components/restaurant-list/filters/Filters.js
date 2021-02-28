import React from 'react';

import DropdownFilter from './dropdown-filter/DropdownFilter';
import CheckboxFilter from './checkbox-filter/CheckboxFilter';
import GridFilter from './grid-filter/GridFilter';

class Filters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="restaurant-list-filter">
                <DropdownFilter />
    
                <CheckboxFilter />
    
                <GridFilter layout={this.props.gridLayout} onChangeLayout={this.props.onChangeLayout} />
            </section>
        );
    }
}

export default Filters;