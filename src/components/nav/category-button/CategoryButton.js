import React from 'react';

import CategoryDropdown from '../category-dropdown/CategoryDropdown';

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            categories: [],
            selected: {}
        };

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
    }

    componentDidMount() {
        const callback = () => this.setState({ selected: this.state.categories[0] });

        this.setState({
            categories: [
                { id: "1", name: "Restaurants", img: "/assets/img/icons/categories/restaurants_icon.svg" },
                { id: "2", name: "Groceries", img: "/assets/img/icons/categories/groceries_icon.svg" },
                { id: "3", name: "Flowers", img: "/assets/img/icons/categories/flowers_icon.svg" },
                { id: "4", name: "Cosmetics", img: "/assets/img/icons/categories/cosmetics_icon.svg" },
                { id: "5", name: "Supplements", img: "/assets/img/icons/categories/supplements_icon.svg" },
                { id: "6", name: "Electronics", img: "/assets/img/icons/categories/electronics_icon.svg" }
            ]
        }, callback);
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    select(selected) {
        this.setState({ selected });
    }

    render() {
        const className = this.state.isOpen ? "category-btn category-btn--open" : "category-btn";

        return (
            <div className="CategoryButton">
                <button className={className} onClick={this.toggle}>
                    <img className="category-btn__img" src={this.state.selected.img} />
                    <i className="category-btn__caret--down fa fa-caret-down"></i>
                </button>
                <CategoryDropdown isOpen={this.state.isOpen} categories={this.state.categories} select={this.select} />
            </div >
        );
    }
}

export default CategoryButton;