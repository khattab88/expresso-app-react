import React from 'react';

class Categories extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const categories = [
            { id: "1", name: "Sandwiches" },
            { id: "2", name: "Sides" },
            { id: "3", name: "Salads" },
            { id: "4", name: "Specialities" },
            { id: "5", name: "Beverages" },
        ];

        const categoriesList = categories.map((category) =>
            <li className="menu-categories__category-item" id={category.id} key={category.id} >
                <a href="#category-1" className="menu-categories__category-link">{category.name}</a>
            </li>
        );

        return (
            <section className="menu-categories">
                <div className="menu-categories__head">
                    <h3 className="menu-categories__title">What's on the Menu</h3>
                    <i className="menu-categories__icon--arrow-down material-icons">keyboard_arrow_down</i>
                </div>
                <div className="menu-categories__body">
                    <ul className="menu-categories__list">
                        {categoriesList}
                    </ul>
                </div>
            </section>
        );
    }
}

export default Categories;