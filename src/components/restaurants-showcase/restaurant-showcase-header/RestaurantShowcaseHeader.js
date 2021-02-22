function RestaurantShowcaseHeader(props) {
    
    return(
        <div className="showcase__head">
            <h2 className="showcase__title-primary">{props.primaryTitle} <span>restaurants</span></h2>
            <p className="showcase__title-secondary">{props.secondaryTitle}</p>
        </div>
    );
}

export default RestaurantShowcaseHeader;