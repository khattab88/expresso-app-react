import React from 'react';

class Categories extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggleMenuCategories = this.toggleMenuCategories.bind(this);
    }

    toggleMenuCategories(e) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        const categoriesList = this.props.menu.categories.map((category) =>
            <li className="menu-categories__category-item" id={category.id} key={category.id} >
                <a href="#category-1" className="menu-categories__category-link">{category.name}</a>
            </li>
        );

        return (
            <section className="menu-categories">
                <div className="menu-categories__head" onClick={this.toggleMenuCategories}>
                    <h3 className="menu-categories__title">What's on the Menu</h3>
                    <i className="menu-categories__icon--arrow-down material-icons">keyboard_arrow_down</i>
                </div>
                <div className={`${this.state.isOpen ?'menu-categories__body menu-categories__body--open' :'menu-categories__body'}`}>
                    <ul className="menu-categories__list">
                        {categoriesList}
                    </ul>
                </div>
            </section>
        );
    }
}

export default Categories;