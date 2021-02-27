import React from 'react';

import CategoryDropdown from '../category-dropdown/CategoryDropdown';

class CategoryButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };

        this.toggleNavCategory = this.toggleNavCategory.bind(this);
    }

    toggleNavCategory(e) {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const className = this.state.isOpen ?"category-btn category-btn--open" :"category-btn";

        return (
            <div className="CategoryButton">
                <button className={className} onClick={this.toggleNavCategory}>
                    <i className="category-btn__icon material-icons">fastfood</i>
                    <i className="category-btn__caret--down fa fa-caret-down"></i>
                </button>
                <CategoryDropdown isOpen={this.state.isOpen} />
            </div>
        );
    }
}

export default CategoryButton;