import React from 'react';

import CountryDropdown from '../../country-dropdown/CountryDropdown';

class CountryBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        // console.log(this.state.isOpen);

        this.toggleNavCountry = this.toggleNavCountry.bind(this);
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    toggleNavCountry(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        console.log("render");

        let className = this.state.isOpen ?"country-btn country-btn--open" :"country-btn";

        return(
            <button className={className} onClick={this.toggleNavCountry}>
                <img className="country-btn__img" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg" alt="egypt" />
                <i className="country-btn__caret--down fa fa-caret-down"></i>
                <CountryDropdown isOpen={this.state.isOpen} />
            </button>
        );
    }
}

export default CountryBtn;