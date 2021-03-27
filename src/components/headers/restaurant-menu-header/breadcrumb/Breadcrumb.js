import { Link } from "react-router-dom";

function Breadcrumb(props) {
    return (
        <section className="breadcrumb">
            <ul className="breadcrumb__list">
                <li className="breadcrumb__item breadcrumb__item--home">
                    <Link className="breadcrumb__link" to="/">Home</Link>
                </li>
                <li className="breadcrumb__item">
                    <span className="breadcrumb__separator">/</span>
                </li>
                <li className="breadcrumb__item breadcrumb__item">
                    <Link className="breadcrumb__link" to="/restaurant-list">Restaurants</Link>
                </li>
                <li className="breadcrumb__item">
                    <span className="breadcrumb__separator">/</span>
                </li>
                <li className="breadcrumb__item breadcrumb__item--current">
                    <a className="breadcrumb__link" href={`/restaurant-menu/${props.branch.id}`}>{props.branch.restaurant.name}</a>
                </li>
            </ul>
        </section>

    );
}

export default Breadcrumb;