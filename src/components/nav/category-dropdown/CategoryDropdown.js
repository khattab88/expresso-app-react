import React from 'react';

class CategoryDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.renderList = this.renderList.bind(this);
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(e) {
        e.preventDefault();

        const target = e.target.closest(".category-dropdown__item");

        this.props.select({
            id: target.dataset["id"],
            name: target.dataset["name"],
            image: target.dataset["img"],
        });
    }

    renderList() {
        let categoryList = null;

        if (this.props.categories && this.props.categories.length > 0) {

            categoryList = this.props.categories.map((category) =>

                <li className="category-dropdown__item" key={category.name}
                    data-id={category.id} data-name={category.name} data-img={category.image} onClick={this.onSelect}>
                    <a href="#" className="category-dropdown__link">
                        <div className="category-dropdown__img">
                            <img src={category.image} alt={category.name} />
                        </div>     
                        <p className="category-dropdown__text">{category.name}</p> 
                    </a>
                </li>
            );

        }

        return categoryList;
    }

    render() {
        const className = this.props.isOpen ? "category-dropdown category-dropdown--open" : "category-dropdown";

        return (
            <ul className={className}>
                {this.renderList()}
            </ul>
        );
    }
}

export default CategoryDropdown;