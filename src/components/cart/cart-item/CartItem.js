import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const optionList = this.props.item.options.map((opt) =>
            <li class="cart__item-option" data-option-id={opt.id}>
                <p>{`${opt.name}:`}</p>
                <span data-selected-id={opt.selected.id} data-selected-price={opt.selected.value}>
                    {`${opt.selected.name}: ${opt.selected.value}.00 EGP`}
                </span>
            </li>
        );

        return (
            <article class="cart__item" data-item-id="1">
                <div class="cart__item-detail">
                    <p class="cart__item-name">{this.props.item.name}</p>
                    <p class="cart__item-price">{`${this.props.item.price} EGP`}</p>
                </div>

                <div class="cart__item-options">
                    {optionList}
                </div>

                <div class="cart__item-notes">
                    <p>Notes:</p>
                    <span>{this.props.item.notes}</span>
                </div>

                <div class="cart__item-controls">
                    <div class="cart__item-controls-btn cart__item-controls-btn-remove">-</div>
                    <p class="cart__item-controls-count">{this.props.item.count}</p>
                    <div class="cart__item-controls-btn cart__item-controls-btn-add">+</div>
                    <a class="cart__item-controls-remove" rel="nofollow">
                        <span>x</span>
                    </a>
                </div>
            </article>
        );
    }
}

export default CartItem;