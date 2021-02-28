import React from 'react';

class GridButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const type = this.props.type;
        const className = this.props.active ?"grid-btn grid-btn--active" :"grid-btn";

        return (
            <a href="#" title={`View ${type} columns`} className={className} data-grid-cols={type} onClick={this.props.onChangeLayout}>
                <img className="grid-btn__icon" src={`/assets/img/icons/${type}-cols-icon.png`} alt={`View ${type} columns`} />
            </a>
        );
    }
}

export default GridButton;