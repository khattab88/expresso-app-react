import React from 'react';

import MenuItem from '../menu-item/MenuItem';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const menuItemList = this.props.category.menuItems.map((item) =>
            <MenuItem item={item} key={item.id} />
        ); 

        return (
            <article className="menu-items-by-category" id={this.props.category.id}>
                <h2 className="menu-items-by-category__category-name">{this.props.category.name}</h2>
                <div className="menu-items-by-category__menu-items-list">
                    {menuItemList}
                </div>
            </article>
        );
    }
}

export default CategoryItem;