import React from 'react';

import MenuItemOption from './menu-item-option/MenuItemOption';

class MenuItemModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1,
            optionSelection: {},
            notes: "",
            valid: true
        };

        this.renderOptions = this.renderOptions.bind(this);

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this)
        this.onNotesChanged = this.onNotesChanged.bind(this);

        this.updateOptionSelection = this.updateOptionSelection.bind(this);

        this.close = this.close.bind(this);
        this.addToCart = this.addToCart.bind(this);
    }

    componentDidUpdate() {
        // console.log(this.state);
    }

    close(e) {
        this.setState({
            count: 1,
            optionSelection: {},
            notes: ""
        });

        this.props.toggleMenuItemModal();
    }

    addToCart(e) {
        this.state["itemId"] = this.props.item.id;

        // console.log(this.state.optionSelection);

        this.props.addItemToCart(this.state);

        this.close();
        this.props.toggleToaster();
    }

    onNotesChanged(e) {
        const value = e.target.value;
        // console.log(value);

        this.setState({
            notes: value
        });
    }

    
    increaseCount() {
        let count = this.state.count + 1;
        this.setState({ count: count });
    }

    decreaseCount() {
        let count = this.state.count - 1;
        if(count > 0)
            this.setState({ count: count});
    }

    updateOptionSelection(selection) {
        // console.log(selection);

        const callback = () => {
            // console.log(this.state.optionSelection);
        };

        let optionSelection = {...this.state.optionSelection};

        optionSelection[selection.optionId] = selection.selection;

        this.setState({ 
            optionSelection
        }, callback);
    }

    renderOptions(options) {
        if(!options) return null;

        return options.map(opt => <MenuItemOption option={opt} key={opt.id} updateOptionSelection={this.updateOptionSelection} />);
    }



    render() {
        const menuItem = this.props.item;

        let className = this.props.isOpen 
                            ? "menu-item-modal menu-item-modal--open"
                            : "menu-item-modal menu-item-modal--close";

        const optionList = this.renderOptions(menuItem.options);

        return (
            <section className={className}>

                <div className="menu-item-modal__content menu-item-modal__content--animated" data-id={menuItem.id}>
                    <div className="menu-item-modal__container">

                        <div className="menu-item-modal__head">
                            <p className="menu-item-modal__close" onClick={this.close}>
                                <i className="fa fa-times"></i>
                            </p>
                            <img className="menu-item-modal__item-img" src={menuItem.image} alt={menuItem.name} />
                        </div>

                        <div className="menu-item-modal__body">

                            <section className="dish-info">
                                <div className="dish-info__row">
                                    <h3 className="dish-info__name">{menuItem.name}</h3>
                                    <p className="dish-info__price"><span>{menuItem.price}</span>.00 EGP</p>
                                </div>
                                <p className="dish-info__desc">{menuItem.desc}</p>
                            </section>

                            {optionList}

                            <article className="dish-options">
                                <div className="dish-options__head">
                                    <h4 className="dish-options__title">Add Special Instructions</h4>
                                    <span className="dish-options__icon dish-options__icon--arrow-up"><i className="fa fa-chevron-up"></i></span>
                                    <span className="dish-options__icon dish-options__icon--arrow-down"><i className="fa fa-chevron-down"></i></span>
                                </div>
                                <p className="validation-info validation-info--optional"></p>
                                <textarea 
                                    className="dish-options__body dish-option__input-textarea" name="notes" id="notes" cols="40" rows="6" 
                                    placeholder="Add a note (food allergies, extra sauce, no onions, etc.). Please be clear and concise so we can get your order perfect."
                                    value={this.state.notes} onChange={this.onNotesChanged}></textarea>
                            </article>

                        </div>

                        <div className="menu-item-modal__footer">
                            <div className="cart-controls">
                                <div className="cart-controls__btn cart-controls__btn-remove" onClick={this.decreaseCount}>-</div>
                                <p className="cart-controls__count">{this.state.count}</p>
                                <div className="cart-controls__btn cart-controls__btn-add" onClick={this.increaseCount}>+</div>
                            </div>
                            <button type="button" className="add-order-btn" data-id={menuItem.id} onClick={this.addToCart} disabled={!this.state.valid}>Add to order</button>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default MenuItemModal;