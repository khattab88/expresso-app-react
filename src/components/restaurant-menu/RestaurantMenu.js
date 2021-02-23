import React from 'react';

import MenuItemModal from '../modals/menu-item-modal/MenuItemModal';
import CartModal from '../modals/cart-modal/CartModal';
import LocationModal from '../modals/location-modal/LocationModal';

class RestaurantMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main restaurant-menu-page__main">

                <aside className="restaurant-sidebar">
                    <section className="restaurant-sidebar__show-cart">
                        <h3 className="restaurant-sidebar__show-cart-title">Your Order</h3>
                        <i className="restaurant-sidebar__show-cart-icon material-icons">shopping_cart</i>
                    </section>
                    <section className="menu-categories">
                        <div className="menu-categories__head">
                            <h3 className="menu-categories__title">What's on the Menu</h3>
                            <i className="menu-categories__icon--arrow-down material-icons">keyboard_arrow_down</i>
                        </div>
                        <div className="menu-categories__body">
                            <ul className="menu-categories__list">
                                <li className="menu-categories__category-item" id="1">
                                    <a href="#category-1" className="menu-categories__category-link">Sandwiches</a>
                                </li>
                                <li className="menu-categories__category-item" id="2">
                                    <a href="#category-2" className="menu-categories__category-link">Sides</a>
                                </li>
                                <li className="menu-categories__category-item" id="3">
                                    <a href="#category-3" className="menu-categories__category-link">Salads</a>
                                </li>
                                <li className="menu-categories__category-item" id="4">
                                    <a href="#category-4" className="menu-categories__category-link">Specialities</a>
                                </li>
                                <li className="menu-categories__category-item" id="5">
                                    <a href="#category-5" className="menu-categories__category-link">Beverages</a>
                                </li></ul>
                        </div>
                    </section>
                </aside>

                <div className="menu-items-wrapper">
                    <article className="menu-items-by-category" id="category-1">
                        <h2 className="menu-items-by-category__category-name">Sandwiches</h2>
                        <div className="menu-items-by-category__menu-items-list">
                            <article className="menu-item" id="1">
                                <div className="menu-item__img" style={{ backgroundImage: 'url(/assets/img/items/item-1.png)' }}></div>
                                <div className="menu-item__detail">
                                    <div className="menu-item__detail-box">
                                        <h4 className="menu-item__name">Double Cheese Burger</h4>
                                        <p className="menu-item__price">70 EGP</p>
                                    </div>
                                    <p className="menu-item__desc">House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...</p>
                                </div>
                            </article>
                            <article className="menu-item" id="2">
                                <div className="menu-item__img" style={{ backgroundImage: 'url(/assets/img/items/item-2.png)' }}></div>
                                <div className="menu-item__detail">
                                    <div className="menu-item__detail-box">
                                        <h4 className="menu-item__name">Double Cheese Burger</h4>
                                        <p className="menu-item__price">70 EGP</p>
                                    </div>
                                    <p className="menu-item__desc">House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey...</p>
                                </div>
                            </article>
                        </div>
                    </article>

                </div>

                <MenuItemModal />
                <CartModal />
                <LocationModal />

            </main>
        );
    }
}

export default RestaurantMenu;