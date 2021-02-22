import Card from '../card/Card';

function List(props) {

    const restaurants = [
        {
            id: "1",
            name: "McDonald's",
            slogan: "I'm lovin it",
            areaId: "1",
            deliveryTime: 30,
            img: "url(/assets/img/restaurants/web_cover_Mcd.png)",
            tags: [
                { id: "1", name: "Offers"},
                { id: "2", name: "Fast Food"}
            ]
        },
        {
            id: "2",
            name: "KFC",
            slogan: "Finger lickin",
            areaId: "1",
            deliveryTime: 35,
            img: "url(/assets/img/restaurants/1900x1427.jpg)",
            tags: [
                { id: "1", name: "Offers"},
                { id: "2", name: "Fast Food"},
                { id: "3", name: "American"}
            ]
        }
    ];

    const restaurantList = restaurants.map((restaurant) =>
        <Card restaurant={restaurant} key={restaurant.id} />
    );

    return (
        <section className="restaurant-list" style={{ position: "relative" }}>
            <div className="restaurant-list__empty-template">
                <h3>No results found</h3>
                <img src="https://trycarriage.global.ssl.fastly.net/assets/v2/no_restaurants_icon@3x-a3f381c00ef23cae61fb6ee8d58c46a3.png" alt="no results" />
                <p>Please select another area or choose a filter types.</p>
            </div>

            <img src="../assets/img/loader-grid.svg" className="loader loader--hidden" />

            {restaurantList}

        </section>
    );
}

export default List;