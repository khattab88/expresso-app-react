import React from 'react';

import CategoryCard from './category-card/CategoryCard';
import categoryApi from '../../api/CategoryApi';

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
            const selected = this.state.categories[0];

            this.setState({ selectedId: selected.id });
        };

        const response = await this.getCategories();
        if(response.err) {
            this.setState({ err: response.err});
        } else {
            this.setState({ categories: response.data }, callback);
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

    renderList() {
        const categoryList = this.state.categories.map((category) => {
            const active = category.id === this.state.selectedId;
            // console.log(`${category.id}: ${active}`);
            return (<CategoryCard category={category} key={category.id} active={active} select={this.select} />);
        });

        return categoryList;
    }

    select(selectedId) {
        this.setState({ selectedId });
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

export default CategoriesShowcase;