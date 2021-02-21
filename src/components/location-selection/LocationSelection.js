import CityItem from './city-item/CityItem';
import AreaItem from './area-item/AreaItem';

function LocationSelection(props) {

    const cities = [
        {
            id: "1", name: "Cairo",
            areas: [
                { id: "1", name: "Heliopolis"},
                { id: "2", name: "Zamalek"},
                { id: "3", name: "DownTown"},
                { id: "4", name: "Maadi"},
                { id: "5", name: "Nasr City"},
            ]
        },
        {
            id: "2", name: "Giza",
            areas: [
                { id: "6", name: "Mohandessien"},
                { id: "7", name: "Dokki"},
                { id: "8", name: "Giza Square"},
                { id: "9", name: "Haram"},
                { id: "10", name: "6th October"},
            ]
        }
    ];

    const cityList = cities.map((city) => {
        const areaList = city.areas.map((area) => 
            <AreaItem area={area} key={area.id} />
        );

        return(
            <CityItem city={city} key={city.id}>
                {areaList}
            </CityItem>
        );
    });

    const selected = cities[0].areas[0];

    return(
        <div className="location-selection">
            <button className="location-selection__btn">
                <i className="location-selection__icon-location material-icons-outlined">location_on</i>
                <p className="location-selection__value" data-selected={selected.id}>{selected.name}</p>
                <i className="location-selection__icon-caret location-selection__icon-caret--down material-icons">keyboard_arrow_down</i>
                <i className="location-selection__icon-caret location-selection__icon-caret--up material-icons">keyboard_arrow_up</i>
            </button>
            <div className="location-selection__box">
                <input type="text" className="location-selection__input" />
                <ul className="location-selection__city-list">
                    {cityList}
                </ul>
            </div>
        </div>
    );
}

export default LocationSelection;