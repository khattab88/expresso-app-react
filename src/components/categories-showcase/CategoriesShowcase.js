function CategoriesShowcase() {
    return(
        <div className="categories">
            <h2 className="categories__title">Looking for somthing else?</h2>
            <div className="categories__wrapper">
                <button className="arrow-btn arrow-btn--left">
                    <i className="arrow-btn__icon--left fa fa-chevron-left"></i>
                </button>
                <ul className="categories__list">
                    <li className="category-card category-card--active cat-1">
                        <div className="category-card__head">
                            <img src="/assets/img/icons/categories/restaurants_icon.svg" alt="" className="category-card__icon" />
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Restaurants</h4>
                        </div>
                    </li>
                    <li className="category-card cat-2">
                        <div className="category-card__head">
                            <img src="/assets/img/icons/categories/groceries_icon.svg" alt="" className="category-card__icon" />
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Groceries</h4>
                        </div>
                    </li>
                    <li className="category-card cat-3">
                        <div className="category-card__head">
                            <img src="/assets/img/icons/categories/flowers_icon.svg" alt="" className="category-card__icon" />
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Flowers</h4>
                        </div>
                    </li>
                    <li className="category-card cat-4">
                        <div className="category-card__head">
                            <img src="/assets/img/icons/categories/cosmetics_icon.svg" alt="" className="category-card__icon" />
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Cosmetics</h4>
                        </div>
                    </li>
                    <li className="category-card cat-5">
                        <div className="category-card__head">
                        <img src="/assets/img/icons/categories/supplements_icon.svg" alt="" className="category-card__icon" />
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Supplements</h4>
                        </div>
                    </li>
                    <li className="category-card cat-6">
                        <div className="category-card__head">
                            <img src="/assets/img/icons/categories/electronics_icon.svg" alt="" className="category-card__icon" />
                        </div>
                        <div className="category-card__body">
                            <h4 className="category-card__name">Electronics</h4>
                        </div>
                    </li>
                </ul>
                <button className="arrow-btn arrow-btn--right">
                    <i className="arrow-btn__icon--right fa fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
}

export default CategoriesShowcase;