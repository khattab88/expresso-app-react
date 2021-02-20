function CategoryDropdown(props) {
    const categories = [
        { name: "Groceries", icon: "shopping_basket" },
        { name: "Flowers", icon: "local_florist" },
        { name: "Cosmetics", icon: "card_giftcard" },
        { name: "Supplements", icon: "local_pharmacy" },
        { name: "Electronics", icon: "touch_app" }
    ];

    const categoryList = categories.map((category) =>
        <li className="category-dropdown__item" key={category.name}>
            <a href="#" className="category-dropdown__link">
                <i className="category-dropdown__icon material-icons">{category.icon}</i>
                {category.name}
            </a>
        </li>
    );

    return(
        <ul className="category-dropdown">
            {categoryList}
        </ul>
    );
}

export default CategoryDropdown;