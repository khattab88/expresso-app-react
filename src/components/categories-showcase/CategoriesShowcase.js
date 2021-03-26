import React from 'react';
import { connect } from 'react-redux';

import CategoryCard from './category-card/CategoryCard';
import categoryApi from '../../api/CategoryApi';

import { selectCategory } from "../../store/actions";

class CategoriesShowcase extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            selectedId: "0",
            err: null
        }

        this.renderList = this.renderList.bind(this);
        this.select = this.select.bind(this);
    }

    async componentDidMount() {
        const callback = () => { 

            let selectedCategory = null;

            if(Object.keys(this.props.selectedCategory).length) {
                selectedCategory = this.props.selectedCategory;
            } else {
                selectedCategory = this.state.categories[0];
            }

            this.setState({ selectedId: selectedCategory.id });
        };

        const response = await this.getCategories();
        if(response.err) {
            this.setState({ err: response.err});
        } else {
            this.setState({ categories: response.data }
            , callback);
        }

    }

    async getCategories() {
        const response = await categoryApi.getCategories();
        return response;
    }

    renderList() {
        const categoryList = this.state.categories.map((category) => {
            const active = category.id === this.props.selectedCategory.id;
            // console.log(`${category.name}: ${active}`);

            return (<CategoryCard category={category} key={category.id} active={active} select={this.select} />);
        });

        return categoryList;
    }

    select(selected) {

        this.props.selectCategory(selected);
        // console.log(selected);

        this.setState({ selectedId: selected.id });
    }

    render() {
        return (
            <div className="categories">
                <h2 className="categories__title">Looking for somthing else?</h2>
                <div className="categories__wrapper">
                    <button className="arrow-btn arrow-btn--left">
                        <i className="arrow-btn__icon--left fa fa-chevron-left"></i>
                    </button>
                    <ul className="categories__list">
                        {this.renderList()}
                    </ul>
                    <button className="arrow-btn arrow-btn--right">
                        <i className="arrow-btn__icon--right fa fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state.selectedCategory);

    return { selectedCategory: state.selectedCategory }
}

export default connect(mapStateToProps, { selectCategory })(CategoriesShowcase);