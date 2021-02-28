import React from 'react';

import GridButton from './grid-button/GridButton';

class GridFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.layout);

        return (
            <div className="filter-grid">
                <GridButton type="three" active={this.props.layout === "three"} onChangeLayout={this.props.onChangeLayout} />
                <GridButton type="two" active={this.props.layout === "two"} onChangeLayout={this.props.onChangeLayout} />
            </div>
        );
    }
}

export default GridFilter;