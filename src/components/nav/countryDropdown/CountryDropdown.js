function CountryDropdown(props) {
    const countries = [
        { name: "Egypt", img: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg"},
        { name: "Saudia Arabia", img: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/sa.svg"},
        { name: "UAE", img: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/ae.svg"},
        { name: "Kuwait", img: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/kw.svg"},
        { name: "Qatar", img: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/qa.svg"},
        { name: "Bahrain", img: "https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/bh.svg"},
    ];

    const countryList = countries.map((country) => 
        <li className="country-dropdown__item" key={country.name}>
            <a className="country-dropdown__link" href="#">
                <img className="country-dropdown__img" src={country.img} alt={country.name} />
                {country.name}
            </a>
        </li>
    );

    return(
        <ul className="country-dropdown">
            {countryList}
        </ul>
    );
}

export default CountryDropdown;