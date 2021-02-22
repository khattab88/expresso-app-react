function Breadcrumb(props) {
    return (
        <section className="breadcrumb">
            <ul className="breadcrumb__list">
                <li className="breadcrumb__item breadcrumb__item--home">
                    <a className="breadcrumb__link" href="../home/index.html">Home</a>
                </li>
                <li className="breadcrumb__item">
                    <span className="breadcrumb__separator">/</span>
                </li>
                <li className="breadcrumb__item breadcrumb__item">
                    <a className="breadcrumb__link" href="../restaurant-list/index.html">Restaurants</a>
                </li>
                <li className="breadcrumb__item">
                    <span className="breadcrumb__separator">/</span>
                </li>
                <li className="breadcrumb__item breadcrumb__item--current">
                    <a className="breadcrumb__link" href="#">{props.restaurantName}</a>
                </li>
            </ul>
        </section>

    );
}

export default Breadcrumb;