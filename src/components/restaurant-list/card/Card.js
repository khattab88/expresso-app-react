import Tag from "../tag/Tag";

function Card(props) {

    const tagList = props.restaurant.tags.map((tag) => 
        <Tag tag={tag} key={tag.id}/>
    );

    return (
        <article className="restaurant-info-card" data-id={props.restaurant.id} data-area={props.restaurant.areaId} >
            <div className="restaurant-info-card__head" style={{ backgroundImage: props.restaurant.img }}>
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
        </article>
    );
}

export default Card;