import React from 'react';
import { connect } from 'react-redux';

import CountryDropdown from '../../country-dropdown/CountryDropdown';
import countryApi from '../../../api/CountryApi';

import { selectCountry } from "../../../store/actions";

class CountryBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            countries: [],
            selected: { id: "0", name: '', image: ''},
            err: null,
        };

        this.ref = React.createRef();

        this.toggleNavCountry = this.toggleNavCountry.bind(this);
        this.select = this.select.bind(this);
        
        this.onBodyClick = this.onBodyClick.bind(this);
    }

    async componentDidMount() {
        const callback = () => {

            let selectedCountry = null;

            if(Object.keys(this.props.selectedCountry).length) {
                selectedCountry = this.props.selectedCountry;
            } else {
                selectedCountry = this.state.countries.find(country => country.name === "Egypt");
            }

            this.props.selectCountry(selectedCountry);

            this.setState({ 
                selected: selectedCountry
            });
        }

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

        document.body.addEventListener("click", this.onBodyClick);
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

    componentDidUpdate() {
        // console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        // console.log("componentWillUnmount");

        document.body.removeEventListener("click", this.onBodyClick);
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
        // console.log(selected);

        this.props.selectCountry(selected);

        this.setState({
            selected: selected
        });
    }

    render() {
        const className = this.state.isOpen ? "country-btn country-btn--open" : "country-btn";
        const selected = (this.props.selectedCountry.image !== '') ? this.props.selectedCountry : { name:"Egypt", image: "/assets/img/flags/eg.svg" };
       
        return(
            <button className={className} onClick={this.toggleNavCountry} ref={this.ref}>
                <img className="country-btn__img" src={selected.image} alt={selected.name} />
                <i className="country-btn__caret--down fa fa-caret-down"></i>
                <CountryDropdown isOpen={this.state.isOpen} countries={this.state.countries} select={this.select} />
            </button>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.selectedCountry);

    return { selectedCountry: state.selectedCountry }
}

export default connect(mapStateToProps, { selectCountry })(CountryBtn);