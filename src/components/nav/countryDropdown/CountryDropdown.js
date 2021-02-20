function CountryDropdown(props) {
    const countries = [
        { name: "Egypt", img: "/assets/img/flags/eg.svg"},
        { name: "Saudia Arabia", img: "/assets/img/flags/sa.svg"},
        { name: "UAE", img: "/assets/img/flags/ae.svg"},
        { name: "Kuwait", img: "/assets/img/flags/kw.svg"},
        { name: "Qatar", img: "/assets/img/flags/qa.svg"},
        { name: "Bahrain", img: "/assets/img/flags/bh.svg"},
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