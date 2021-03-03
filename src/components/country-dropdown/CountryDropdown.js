import React from 'react';

class CountryDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    componentDidMount() { }

    onSelect(e) {
        e.preventDefault();

        const target = e.target.closest(".country-dropdown__item");

        const selected = {
            id: target.dataset["id"],
            name: target.dataset["name"],
            img: target.dataset["img"],
        };

        this.props.select(selected);
    }

    renderList() {
        let countryList = null;

        if (this.props.countries && this.props.countries.length > 0) {
            countryList = this.props.countries.map((country) =>

                <li className="country-dropdown__item" key={country.id} 
                    data-id={country.id} data-name={country.name} data-img={country.img}
                    onClick={this.onSelect} >
                    <a className="country-dropdown__link" href="#">
                        <img className="country-dropdown__img" src={country.img} alt={country.name} />
                        {country.name}
                    </a>
                </li>
            );
        }

        return countryList;
    }

    render() {
        const className = this.props.isOpen ? "country-dropdown country-dropdown--open" : "country-dropdown";

        return (
            <ul className={className}>
                {this.renderList()}
            </ul>
        );
    }
}

export default CountryDropdown;