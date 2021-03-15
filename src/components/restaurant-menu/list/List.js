import React from 'react';

import CategoryItem from './category-item/CategoryItem';

class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const sectionList = this.props.menu.menuSections.map((section) => 
            <CategoryItem 
                section={section} key={section.id} 
                toggleMenuItemModal={this.props.toggleMenuItemModal} 
                renderMenuItemModal={this.props.renderMenuItemModal} />
        );

        return (
            <div className="menu-items-wrapper">
                {sectionList}
            </div>
        );
    }
}

export default List;