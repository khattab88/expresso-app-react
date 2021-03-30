import React from 'react';
import { connect } from 'react-redux';

import CategoryDropdown from '../category-dropdown/CategoryDropdown';
import categoryApi from '../../../api/CategoryApi';

import { selectCategory } from '../../../store/actions';

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            categories: [],
            selected: {id: "0", name: '', image: ''},
            err: null
        };

        this.ref = React.createRef();

        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);

        this.onBodyClick = this.onBodyClick.bind(this);
    }

    async componentDidMount() {
        const callback = () => {

            let selectedCategory = null;

            if(Object.keys(this.props.selectedCategory).length) {
                selectedCategory = this.props.selectedCategory;
            } else {
                selectedCategory = this.state.categories.find(category => category.name === "Restaurants")
            }

            this.props.selectCategory(selectedCategory);

            this.setState({
                selected: selectedCategory
            });
        } 

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

        this.props.selectCategory(selected);

        this.setState({ 
            selected ,
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const className = this.state.isOpen ? "category-btn category-btn--open" : "category-btn";
        const selected = (this.props.selectedCategory.image !== '') ? this.props.selectedCategory : { name:"Restaurants", image: "/assets/img/icons/categories/restaurants_icon.svg" };

        return (
            <div className="CategoryButton" style={{ position: "relative" }} ref={this.ref}>
                <button className={className} onClick={this.toggle}>
                    <img className="category-btn__img" src={selected.image} alt={selected.name} />
                    <i className="category-btn__caret--down fa fa-caret-down"></i>
                </button>
                <CategoryDropdown isOpen={this.state.isOpen} categories={this.state.categories} select={this.select} />
            </div >
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.selectedCategory);

    return { selectedCategory: state.selectedCategory }
}

export default connect(mapStateToProps, { selectCategory })(CategoryButton);