function AreaItem(props) {
    return(
        <li className="location-selection__area" id={props.area.id}>{props.area.name}</li>
    );
}

export default AreaItem;