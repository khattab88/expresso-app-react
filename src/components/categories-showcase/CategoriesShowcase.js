function CategoriesShowcase() {
    return(
        <div className="categories">
            <h2 className="categories__title">Looking for somthing else?</h2>
            <div className="categories__wrapper">
                <button className="arrow-btn"><i className="arrow-btn__icon--left fa fa-chevron-left"></i></button>
                <ul className="categories__list">
                    <li className="category-card category-card--active cat-1">
                        <div className="category-card__head"><i className="category-card__icon material-icons">fastfood</i>
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Restaurants</h4>
                        </div>
                    </li>
                    <li className="category-card cat-2">
                        <div className="category-card__head"><i className="category-card__icon fa fa-shopping-basket"></i>
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Groceries</h4>
                        </div>
                    </li>
                    <li className="category-card cat-3">
                        <div className="category-card__head"><i
                                className="category-card__icon material-icons">local_florist</i></div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Flowers</h4>
                        </div>
                    </li>
                    <li className="category-card cat-4">
                        <div className="category-card__head"><i
                                className="category-card__icon material-icons">card_giftcard</i></div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Cosmetics</h4>
                        </div>
                    </li>
                    <li className="category-card cat-5">
                        <div className="category-card__head"><i
                                className="category-card__icon material-icons">local_pharmacy</i></div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Supplements</h4>
                        </div>
                    </li>
                    <li className="category-card cat-6">
                        <div className="category-card__head"><i className="category-card__icon material-icons">touch_app</i>
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Electronics</h4>
                        </div>
                    </li>
                </ul>
                <button className="arrow-btn"><i className="arrow-btn__icon--right fa fa-chevron-right"></i></button>
            </div>
        </div>
    );
}

export default CategoriesShowcase;