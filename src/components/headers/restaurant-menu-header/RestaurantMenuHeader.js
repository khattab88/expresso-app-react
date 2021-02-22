import Breadcrumb from './breadcrumb/Breadcrumb';
import RestaurantInfo from './restaurant-info/RestaurantInfo';

function RestaurantMenuHeader(props) {
    return(
        <header className="header restaurant-menu-page__header" style={{ backgroundImage: "url(/assets/img/restaurants/web_cover_Mcd.png)" }}>

            <Breadcrumb restaurantName={props.restaurant.name} />

            <RestaurantInfo restaurant={props.restaurant} />

        </header>
    );
}

export default RestaurantMenuHeader;