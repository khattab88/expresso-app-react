function CityItem(props) {
    return(
        <li className="location-selection__city" id={props.city.id}>
            <div className="location-selection__city-name">{props.city.name}</div>
            <ul className="location-selection__area-list">
                {props.children}
            </ul>
        </li>
    );
}

export default CityItem;