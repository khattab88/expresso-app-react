function RestaurantItem(props) {
    return(
        <li className="restaurant-selection__restaurant" id={props.restaurant.id} data-area={props.restaurant.areaId}>
            {props.restaurant.name}
        </li>
    );
}

export default RestaurantItem;