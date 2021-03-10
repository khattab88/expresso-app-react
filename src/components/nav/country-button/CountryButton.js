import React from 'react';

import CountryDropdown from '../../country-dropdown/CountryDropdown';
import countryApi from '../../../api/CountryApi';

class CountryBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            countries: [],
            selected: { name: '', image: ''},
            err: null,
        };

        this.toggleNavCountry = this.toggleNavCountry.bind(this);
        this.select = this.select.bind(this);
    }

    async componentDidMount() {
        const callback = () => this.setState({ selected: this.state.countries[0] });

        const response = await this.getCountries();
        if(response.err) {
            console.error(response.err);
            this.setState({
                err: response.err
            });
        } else {
            this.setState({
                countries: response.data
            }, callback);
        }

        // this.setState({
        //     countries: [
        //         { id: "1", name: "Egypt", img: "/assets/img/flags/eg.svg" },
        //         { id: "2", name: "Saudia Arabia", img: "/assets/img/flags/sa.svg" },
        //         { id: "3", name: "UAE", img: "/assets/img/flags/ae.svg" },
        //         { id: "4", name: "Kuwait", img: "/assets/img/flags/kw.svg" },
        //         { id: "5", name: "Qatar", img: "/assets/img/flags/qa.svg" },
        //         { id: "6", name: "Bahrain", img: "/assets/img/flags/bh.svg" },
        //     ]
        // }, callback);
    }

    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount");
    }

    async getCountries() {
        const response = await await countryApi.getCountries();
        return response;
    }

    toggleNavCountry(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    select(selected) {
        this.setState({
            selected: selected
        });
    }

    render() {
        const className = this.state.isOpen ? "country-btn country-btn--open" : "country-btn";
        const selected = (this.state.selected.image !== '') ? this.state.selected : { name:"Egypt", image: "/assets/img/flags/eg.svg" }
       
        return(
            <button className={className} onClick={this.toggleNavCountry}>
                <img className="country-btn__img" src={selected.image} alt={selected.name} />
                <i className="country-btn__caret--down fa fa-caret-down"></i>
                <CountryDropdown isOpen={this.state.isOpen} countries={this.state.countries} select={this.select} />
            </button>
        );
    }
}

export default CountryBtn;