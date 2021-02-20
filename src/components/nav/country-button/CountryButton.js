import CountryDropdown from '../../country-dropdown/CountryDropdown';

function CountryBtn(props) {
    return(
        <button className="country-btn">
            <img className="country-btn__img" src="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/eg.svg" alt="egypt" />
            <i className="country-btn__caret--down fa fa-caret-down"></i>
            <CountryDropdown />
        </button>
    );
}

export default CountryBtn;