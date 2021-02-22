function Filters(props) {
    return (
        <section className="restaurant-list-filter">
            <div className="filter-dropdown">
                <div className="filter-dropdown__head">
                    <i className="filter-dropdown__icon fa fa-filter">
                        <span className="filter-dropdown__count">2</span>
                    </i>
                    <p className="filter-dropdown__title">Filter by types of food</p>
                    <i className="filter-dropdown__icon filter-dropdown__icon--angle-down fa fa-angle-down"></i>
                    <span className="filter-dropdown__clear">Clear all</span>
                </div>
                <ul className="filter-dropdown__cuisine-list">
                    <li className="filter-dropdown__cuisine-item">
                        <input type="checkbox" className="filter-dropdown__cuisine-checkbox" id="tag-1" />
                        <label className="filter-dropdown__cuisine-name" htmlFor="tag-1">Offers</label>
                    </li>
                    <li className="filter-dropdown__cuisine-item">
                        <input type="checkbox" className="filter-dropdown__cuisine-checkbox" id="tag-2" />
                        <label className="filter-dropdown__cuisine-name" htmlFor="tag-2">American</label>
                    </li>

                    <li className="filter-dropdown__cuisine-item">
                        <input type="checkbox" className="filter-dropdown__cuisine-checkbox" id="tag-3" />
                        <label className="filter-dropdown__cuisine-name" htmlFor="tag-3">Arabic</label>
                    </li>
                </ul>
            </div>

            <div className="filter-checkbox">
                <input className="filter-checkbox__input" type="checkbox" name="special-offers" id="special-offers" />
                <label htmlFor="special-offers" className="filter-checkbox__title">Special Offers</label>
            </div>

            <div className="filter-grid">
                <a href="#" title="View three columns" className="grid-btn grid-btn--active" data-grid-cols="three">
                    <img className="grid-btn__icon" src="/assets/img/icons/three-cols-icon.png" alt="View three columns" />
                </a>
                <a href="#" title="View two columns" className="grid-btn" data-grid-cols="two">
                    <img className="grid-btn__icon" src="/assets/img/icons/two-cols-icon.png" alt="View two columns" />
                </a>
            </div>
        </section>
    );
}

export default Filters;