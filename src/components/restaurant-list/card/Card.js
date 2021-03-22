import Tag from "../tag/Tag";
import { Link } from "react-router-dom";

function Card(props) {

    const tagList = props.restaurant.tags.map((tag) =>
        <Tag tag={tag} key={tag.id} />
    );

    return (
        <article className="restaurant-info-card" data-id={props.branch.id} data-area={props.restaurant.areaId} >
            <Link to={`/restaurant-menu/${props.branch.id}`} style={{ textDecoration: "none" }}>
                <div className="restaurant-info-card__head">
                    <img src={props.restaurant.image} alt={props.restaurant.name} />
                    <div className="delivery-detail">
                        <p className="delivery-detail__title">Average delivery time</p>
                        <span className="delivery-detail__time">{props.restaurant.deliveryTime} mins</span>
                    </div>
                </div>
                <div className="restaurant-info-card__body">
                    <div className="restaurant-detail">
                        <h3 className="restaurant-detail__name">{props.restaurant.name}</h3>
                        <p className="restaurant-detail__desc">{props.restaurant.slogan}</p>
                    </div>
                </div>
                <div className="restaurant-info-card__footer">
                    <ul className="restaurant-tags">
                        {tagList}
                    </ul>
                </div>
            </Link>
        </article>
    );
}

export default Card;