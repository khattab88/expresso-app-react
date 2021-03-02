import React from 'react';

import GridButton from './grid-button/GridButton';

class GridFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="filter-grid">
                <GridButton type="three" active={this.props.gridLayout === "three"} changeGridLayout={this.props.changeGridLayout} />
                <GridButton type="two" active={this.props.gridLayout === "two"} changeGridLayout={this.props.changeGridLayout} />
            </div>
        );
    }
}

export default GridFilter;