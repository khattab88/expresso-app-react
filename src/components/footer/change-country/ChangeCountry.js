import CountryDropdown from '../../country-dropdown/CountryDropdown';

function ChangeCountry(props) {
    return(
        <button className="change-country__btn">
            <img className="change-country__flag"
                src="/assets/img/flags/eg.svg" alt="egypt" height="20" width="30" />
            Egypt
            <i className="change-country__caret--down fa fa-caret-down"></i>
            <CountryDropdown />
        </button>
    );
}

export default ChangeCountry;