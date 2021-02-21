import LocationSelection from '../location-selection/LocationSelection';

function Search(props) {
    return(
        <div className="search">
            <h2 className="search__title">Find your favorite restaurants, We deliver.</h2>
            <div className="search__box">
                <div className="search__form">
                    <div className="search__input location-selection-wrapper">
                        <LocationSelection />
                    </div>
                    <a href="../restaurant-menu/index.html" className="search__submit">Find Restaurant</a>
                </div>
            </div>
        </div>
    );
}

export default Search;