import React from 'react';
import { connect } from 'react-redux';

import { removeCartItem, updateCartItemCount } from '../../../store/actions';

class CartItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.cartItem.count,
            subTotal: 0
        }

        this.decreaseCount = this.decreaseCount.bind(this);
        this.increaseCount = this.increaseCount.bind(this);

        this.removeItem = this.removeItem.bind(this);

        this.updateItemSubTotal = this.updateItemSubTotal.bind(this);
        this.calcItemSubTotal = this.calcItemSubTotal.bind(this);
    }

    componentDidMount() {
        // console.log(this.state.count);

        this.updateItemSubTotal();
    }

    updateItemSubTotal() {
        // console.log(this.props.cartItem.itemId);

        const subTotal = this.calcItemSubTotal();

        this.setState({ subTotal });

        this.props.onUpdateItemSubTotal({
            itemId: this.props.cartItem.itemId,
            itemSubTotal: subTotal
        });
    }

    calcItemSubTotal() {
        let subTotal = this.props.cartItem.price;

        this.props.cartItem.options.forEach(opt => {
            opt.selection.forEach(s => subTotal += s.value);
        });

        return subTotal * this.state.count;
    }

    decreaseCount(e) {
        let count = this.state.count - 1;
        if (count > 0) this.setState({ count }, this.updateItemSubTotal);

        const itemId = e.target.closest(".cart__item").dataset["itemId"];
        this.props.updateCartItemCount(itemId, count);
    }

    increaseCount(e) {
        let count = this.state.count + 1;
        this.setState({ count }, this.updateItemSubTotal);

        const itemId = e.target.closest(".cart__item").dataset["itemId"];
        this.props.updateCartItemCount(itemId, count);
    }

    removeItem(e) {
        const target = e.target.closest(".cart__item-controls-remove");
        const itemId = target.dataset["itemId"];

        this.props.onUpdateItemSubTotal({
            itemId,
            itemSubTotal: 0
        });

        this.props.removeCartItem(itemId);
    }

    render() {
        // console.log(this.props.cartItem);

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
                    <p className="cart__item-price">{`${this.state.subTotal} EGP`}</p>
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
                    <div className="cart__item-controls-btn cart__item-controls-btn-remove" onClick={this.decreaseCount}>-</div>
                    <p className="cart__item-controls-count">{this.state.count}</p>
                    <div className="cart__item-controls-btn cart__item-controls-btn-add" onClick={this.increaseCount}>+</div>
                    <a className="cart__item-controls-remove" rel="nofollow" data-item-id={this.props.cartItem.itemId} onClick={this.removeItem}>
                        <span>x</span>
                    </a>
                </div>
            </article>
        );
    }
}


export default connect(null, { removeCartItem, updateCartItemCount })(CartItem);