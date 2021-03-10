import React from 'react';

import CategoryDropdown from '../category-dropdown/CategoryDropdown';
import categoryApi from '../../../api/CategoryApi';

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            categories: [],
            selected: {name: '', image: ''},
            err: null
        };

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
    }

    async componentDidMount() {
        const callback = () => this.setState({ 
            // selected: this.state.categories[0] 
            selected: this.state.categories.find(category => category.name === "Restaurants")
        });

        const response = await this.getCategories();
        if(response.err) {
            this.setState({ err: response.err})
        } else {
            this.setState({
                categories: response.data
            }, callback)
        }


        // this.setState({
        //     categories: [
        //         { id: "1", name: "Restaurants", img: "/assets/img/icons/categories/restaurants_icon.svg" },
        //         { id: "2", name: "Groceries", img: "/assets/img/icons/categories/groceries_icon.svg" },
        //         { id: "3", name: "Flowers", img: "/assets/img/icons/categories/flowers_icon.svg" },
        //         { id: "4", name: "Cosmetics", img: "/assets/img/icons/categories/cosmetics_icon.svg" },
        //         { id: "5", name: "Supplements", img: "/assets/img/icons/categories/supplements_icon.svg" },
        //         { id: "6", name: "Electronics", img: "/assets/img/icons/categories/electronics_icon.svg" }
        //     ]
        // }, callback);
    }

    async getCategories() {
        const response = await categoryApi.getCategories();
        return response;
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    select(selected) {
        this.setState({ selected });
    }

    render() {
        const className = this.state.isOpen ? "category-btn category-btn--open" : "category-btn";
        const selected = (this.state.selected.image !== '') ? this.state.selected : { name:"Restaurants", image: "/assets/img/icons/categories/restaurants_icon.svg" };

        return (
            <div className="CategoryButton">
                <button className={className} onClick={this.toggle}>
                    <img className="category-btn__img" src={selected.image} alt={selected.name} />
                    <i className="category-btn__caret--down fa fa-caret-down"></i>
                </button>
                <CategoryDropdown isOpen={this.state.isOpen} categories={this.state.categories} select={this.select} />
            </div >
        );
    }
}

export default CategoryButton;