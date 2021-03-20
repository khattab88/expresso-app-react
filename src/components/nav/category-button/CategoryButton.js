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

        this.ref = React.createRef();

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);

        this.onBodyClick = this.onBodyClick.bind(this);
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

        document.body.addEventListener("click", this.onBodyClick);
    }

    componentWillUnmount() {
        document.body.removeEventListener("click", this.onBodyClick);
    }

    onBodyClick(e) {
        if(this.ref.current && this.ref.current.contains(e.target)) {
            return;
        }

        this.setState({
            isOpen: false
        });
    }

    async getCategories() {
        const response = await categoryApi.getCategories();
        return response;
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    select(selected) {
        this.setState({ 
            selected ,
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const className = this.state.isOpen ? "category-btn category-btn--open" : "category-btn";
        const selected = (this.state.selected.image !== '') ? this.state.selected : { name:"Restaurants", image: "/assets/img/icons/categories/restaurants_icon.svg" };

        return (
            <div className="CategoryButton" ref={this.ref}>
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