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

        this.ref = React.createRef();

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);

        this.onBodyClick = this.onBodyClick.bind(this);
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

        document.body.addEventListener("click", this.onBodyClick);
    }

    componentDidUpdate() {
        // console.log(this.state.countries);
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.onBodyClick);
    }

    onBodyClick(e) {
        // console.log(e.target);

        if(this.ref.current && this.ref.current.contains(e.target)) {
            return;
        }

        this.setState({
            isOpen: false
        });
    };

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
            <button className="change-country__btn" onClick={this.toggle} ref={this.ref}>
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