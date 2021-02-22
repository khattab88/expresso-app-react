function RestaurantInfo(props) {
    return (
        <section className="restaurant-info-box">
            <div className="restaurant-info-box__head">
                <h2 className="restaurant-info-box__head-title">{props.restaurant.name}</h2>
                <p className="restaurant-info-box__head-desc">{props.restaurant.slogan}</p>
            </div>
            <div className="restaurant-delivery">
                <h5 className="restaurant-delivery__heading">Delivery Location</h5>
                <div className="change-location">
                    <p className="change-location__location">{props.restaurant.area.name}</p>
                    <button className="change-location__btn">Change Location</button>
                </div>
                <em className="restaurant-delivery__footer">Average delivery time: {props.restaurant.deliveryTime} mins</em>
            </div>
        </section>
    );
}

export default RestaurantInfo;