import React from 'react';

class Loader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        };
    }

    render() {
        const className = this.props.isLoading ?"loader" :"loader loader--hidden";

        return(
            <img src="/assets/img/loader-grid.svg" className={className} />
        );
    }
}

export default Loader;