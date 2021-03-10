import React from 'react';

import CountryDropdown from '../../country-dropdown/CountryDropdown';
import countryApi from '../../../api/CountryApi';

class ChangeCountry extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            countries: [],
            selected: {},
            err: null
        };

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
    }

    async componentDidMount() {
        const callback = () => this.setState({ selected: this.state.countries[0] });

        const response = await this.getCountries();
        if(response.err) {
            this.setState({ err: response.err});
        } else {
            //console.log(response.data);
            this.setState({
                countries: response.data
            }, callback);
        }

        // this.setState({
        //     countries: [
        //         { id:"1", name: "Egypt", img: "/assets/img/flags/eg.svg" },
        //         { id:"2", name: "Saudia Arabia", img: "/assets/img/flags/sa.svg" },
        //         { id:"3", name: "UAE", img: "/assets/img/flags/ae.svg" },
        //         { id:"4", name: "Kuwait", img: "/assets/img/flags/kw.svg" },
        //         { id:"5", name: "Qatar", img: "/assets/img/flags/qa.svg" },
        //         { id:"6", name: "Bahrain", img: "/assets/img/flags/bh.svg" },
        //     ],
        // }, callback);
    }

    componentDidUpdate() {
        // console.log(this.state.countries);
    }

    async getCountries() {
        const response = await countryApi.getCountries();
        return response;
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    select(selected) {
        this.setState({
            selected: selected
        });
    }

    render() {
        return (
            <button className="change-country__btn" onClick={this.toggle}>
                <img className="change-country__flag"
                    src={this.state.selected.image} alt={this.state.selected.name} height="20" width="30" />
                {this.state.selected.name}
                <i className="change-country__caret--down fa fa-caret-down"></i>
                <CountryDropdown isOpen={this.state.isOpen} countries={this.state.countries} select={this.select} />
            </button>
        );
    }
}

export default ChangeCountry;