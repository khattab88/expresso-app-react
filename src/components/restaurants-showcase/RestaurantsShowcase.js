function RestaurantShowcase() {
    return(
        <main className="main">
            <div className="showcase">
                <div className="showcase__head">
                    <h2 className="showcase__title-primary">2000+ <span>restaurants</span></h2>
                    <p className="showcase__title-secondary">Take your pick from our featured Restaurants. Delivered faster
                        to your door..</p>
                </div>
                <a className="showcase__show-all" href="../restaurant-list/index.html">Show All Restaurants</a>
            </div>
        </main>
    );
}

export default RestaurantShowcase;