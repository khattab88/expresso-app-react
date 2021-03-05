import React from 'react';

import CategoryItem from './category-item/CategoryItem';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const categoryList = this.props.menu.categories.map((category) => 
            <CategoryItem category={category} key={category.id} toggleMenuItemModal={this.props.toggleMenuItemModal} />
        );

        return (
            <div className="menu-items-wrapper">
                {categoryList}
            </div>

        );
    }
}

export default List;