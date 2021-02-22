function Breadcrumb(props) {
    return(
        <section className="restaurant-list-breadcrumb">
            <ul className="restaurant-list-breadcrumb__list">
                <li className="restaurant-list-breadcrumb__item">Restaurants</li>
                <li className="restaurant-list-breadcrumb__item restaurant-list-breadcrumb__separator">/</li>
                <li className="restaurant-list-breadcrumb__item restaurant-list-breadcrumb--current">Cairo</li>
            </ul>
        </section>
    );
}

export default Breadcrumb;