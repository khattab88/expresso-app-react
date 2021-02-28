import React from 'react';

import CategoryItem from './category-item/CategoryItem';

class List extends React.Component {
    constructor(props) {
        super(props);

        this.menu = {
            categories: [
                {
                    id: "1", 
                    name: "Sandwiches",
                    menuItems: [
                        {
                            id: "1", 
                            name: "Double Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: { backgroundImage: 'url(/assets/img/items/item-1.png)' },
                            price: "70 EGP"
                        },
                        {
                            id: "2", 
                            name: "Turkey Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: { backgroundImage: 'url(/assets/img/items/item-2.png)' },
                            price: "60 EGP"
                        }
                    ]
                },
                {
                    id: "2", 
                    name: "Sides",
                    menuItems: [
                        {
                            id: "1", 
                            name: "Regular Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: { backgroundImage: 'url(/assets/img/items/item-6.jpg)' },
                            price: "70 EGP"
                        },
                        {
                            id: "2", 
                            name: "Turkey Cheese Burger",
                            desc: "House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...",
                            img: { backgroundImage: 'url(/assets/img/items/item-7.jpg)' },
                            price: "60 EGP"
                        }
                    ]
                }
            ]
        };
    }

    render() {

        const categoryList = this.menu.categories.map((category) => 
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