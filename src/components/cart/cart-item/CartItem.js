import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const optionList = this.props.item.options.map((opt) =>
            <li className="cart__item-option" data-option-id={opt.id} key={opt.id}>
                <p>{`${opt.name}:`}</p>
                <span data-selected-id={opt.selected.id} data-selected-price={opt.selected.value}>
                    {`${opt.selected.name}: ${opt.selected.value}.00 EGP`}
                </span>
            </li>
        );

        return (
            <article className="cart__item" data-item-id="1">
                <div className="cart__item-detail">
                    <p className="cart__item-name">{this.props.item.name}</p>
                    <p className="cart__item-price">{`${this.props.item.price} EGP`}</p>
                </div>

                <div className="cart__item-options">
                    {optionList}
                </div>

                <div className="cart__item-notes">
                    <p>Notes:</p>
                    <span>{this.props.item.notes}</span>
                </div>

                <div className="cart__item-controls">
                    <div className="cart__item-controls-btn cart__item-controls-btn-remove">-</div>
                    <p className="cart__item-controls-count">{this.props.item.count}</p>
                    <div className="cart__item-controls-btn cart__item-controls-btn-add">+</div>
                    <a className="cart__item-controls-remove" rel="nofollow">
                        <span>x</span>
                    </a>
                </div>
            </article>
        );
    }
}

export default CartItem;