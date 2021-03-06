import React from 'react';

class MenuItemModal extends React.Component {
    constructor(props) {
        super(props);

        this.close = this.close.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    close(e) {
        this.props.toggleMenuItemModal();
    }

    addToCart(e) {
        // TODO: add menu item to cart

        // this.props.toggleMenuItemModal();
    }

    render() {
        const menuItem = this.props.item;

        let className = this.props.isOpen 
                            ? "menu-item-modal menu-item-modal--open"
                            : "menu-item-modal menu-item-modal--close";

        return (
            <section className={className}>

                <div className="menu-item-modal__content menu-item-modal__content--animated" data-id="2">
                    <div className="menu-item-modal__container">

                        <div className="menu-item-modal__head">
                            <p className="menu-item-modal__close" onClick={this.close}>
                                <i className="fa fa-times"></i>
                            </p>
                            <img className="menu-item-modal__item-img" src="/assets/img/items/item-2.png" alt={menuItem.name} />
                        </div>

                        <div className="menu-item-modal__body">

                            <section className="dish-info">
                                <div className="dish-info__row">
                                    <h3 className="dish-info__name">{menuItem.name}</h3>
                                    <p className="dish-info__price"><span>70</span>.00 EGP</p>
                                </div>
                                <p className="dish-info__desc">House-made turkey sausage, cage-free over medium egg, cheddar cheese, honey....</p>
                            </section>


                            <article className="dish-options" data-id="3" data-type="Required">
                                <div className="dish-options__head">
                                    <h4 className="dish-options__title">Choice of bun or lettuce wrap</h4>
                                    <span className="dish-options__icon dish-options__icon--arrow-up"><i className="fa fa-chevron-up"></i></span>
                                    <span className="dish-options__icon dish-options__icon--arrow-down"><i className="fa fa-chevron-down"></i></span>
                                </div>

                                <p className="validation-info validation-info--required">Required, choose at least one.</p>


                                <ul className="dish-options__body dish-options__sigle-selection">

                                    <li className="dish-option">
                                        <div className="dish-option__detail">
                                            <input className="dish-option__input-checkbox" type="radio" name="opt-3" id="optItem-7" data-id="7" />
                                            <label className="dish-option__name" htmlFor="optItem-7">Potato Bun</label>
                                        </div>
                                        <p className="dish-option__price"><span>7</span>.00 EGP</p>
                                    </li>
                                    <li className="dish-option">
                                        <div className="dish-option__detail">
                                            <input className="dish-option__input-checkbox" type="radio" name="opt-3" id="optItem-8" data-id="8" />
                                            <label className="dish-option__name" htmlFor="optItem-8">Lettuce Wrap</label>
                                        </div>
                                        <p className="dish-option__price"><span>3</span>.00 EGP</p>
                                    </li>
                                </ul>
                            </article>

                            <article className="dish-options" data-id="4" data-type="Optional">
                                <div className="dish-options__head">
                                    <h4 className="dish-options__title">Choice of bun or lettuce wrap</h4>
                                    <span className="dish-options__icon dish-options__icon--arrow-up"><i className="fa fa-chevron-up"></i></span>
                                    <span className="dish-options__icon dish-options__icon--arrow-down"><i className="fa fa-chevron-down"></i></span>
                                </div>

                                <p className="validation-info validation-info--optional">Optional, choose multiple.</p>

                                <ul className="dish-options__body dish-options__multiple-selection">

                                    <li className="dish-option">
                                        <div className="dish-option__detail">
                                            <input className="dish-option__input-checkbox" type="checkbox" name="opt-4" id="optItem-9" data-id="9" />
                                            <label className="dish-option__name" htmlFor="optItem-9">No Cheese</label>
                                        </div>
                                        <p className="dish-option__price"><span>0</span>.00 EGP</p>
                                    </li>
                                    <li className="dish-option">
                                        <div className="dish-option__detail">
                                            <input className="dish-option__input-checkbox" type="checkbox" name="opt-4" id="optItem-10" data-id="10" />
                                            <label className="dish-option__name" htmlFor="optItem-10">Regular</label>
                                        </div>
                                        <p className="dish-option__price"><span>3</span>.00 EGP</p>
                                    </li>
                                    <li className="dish-option">
                                        <div className="dish-option__detail">
                                            <input className="dish-option__input-checkbox" type="checkbox" name="opt-4" id="optItem-11" data-id="11" />
                                            <label className="dish-option__name" htmlFor="optItem-11">Cheddar</label>
                                        </div>
                                        <p className="dish-option__price"><span>5</span>.00 EGP</p>
                                    </li>
                                    <li className="dish-option">
                                        <div className="dish-option__detail">
                                            <input className="dish-option__input-checkbox" type="checkbox" name="opt-4" id="optItem-12" data-id="12" />
                                            <label className="dish-option__name" htmlFor="optItem-12">Spicy</label>
                                        </div>
                                        <p className="dish-option__price"><span>10</span>.00 EGP</p>
                                    </li>
                                </ul>
                            </article>

                            <article className="dish-options">
                                <div className="dish-options__head">
                                    <h4 className="dish-options__title">Add Special Instructions</h4>
                                    <span className="dish-options__icon dish-options__icon--arrow-up"><i className="fa fa-chevron-up"></i></span>
                                    <span className="dish-options__icon dish-options__icon--arrow-down"><i className="fa fa-chevron-down"></i></span>
                                </div>
                                <p className="validation-info validation-info--optional"></p>
                                <textarea className="dish-options__body dish-option__input-textarea" name="notes" id="notes" cols="40" rows="6" placeholder="Add a note (food allergies, extra sauce, no onions, etc.). Please be clear and concise so we can get your order perfect."></textarea>
                            </article>

                        </div>

                        <div className="menu-item-modal__footer">
                            <div className="cart-controls">
                                <span className="cart-controls__btn cart-controls__btn-remove">-</span>
                                <p className="cart-controls__count">1</p>
                                <span className="cart-controls__btn cart-controls__btn-add">+</span>
                            </div>
                            <button type="button" className="add-order-btn" data-id="2" onClick={this.addToCart}>Add to order</button>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default MenuItemModal;