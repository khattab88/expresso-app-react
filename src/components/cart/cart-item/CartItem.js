import React from 'react';

class CartItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.cartItem);

        const optionList = this.props.cartItem.options.map((opt) =>
            <li className="cart__item-option" data-option-id={opt.id} key={opt.id}>
                <p>{`${opt.name}:`}</p>
                {
                    opt.selection.map(s =>
                        <span data-selected-id={s.id} data-selected-price={s.value} key={s.id}>
                            {`${s.name}: ${s.value}.00 EGP`}
                        </span>
                    )
                }
            </li>
        );

        return (
            <article className="cart__item" data-item-id={this.props.cartItem.itemId}>
                <div className="cart__item-detail">
                    <p className="cart__item-name">{this.props.cartItem.itemName}</p>
                    <p className="cart__item-price">{`${this.props.cartItem.price} EGP`}</p>
                </div>

                <div className="cart__item-options">
                    {optionList}
                </div>

                {(this.props.cartItem.notes) &&
                    <div className="cart__item-notes">
                        <p>Notes:</p>
                        <span>{this.props.cartItem.notes}</span>
                    </div>
                }

                <div className="cart__item-controls">
                    <div className="cart__item-controls-btn cart__item-controls-btn-remove">-</div>
                    <p className="cart__item-controls-count">{this.props.cartItem.count}</p>
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