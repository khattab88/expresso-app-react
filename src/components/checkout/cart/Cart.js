function Cart(props) {
    return (
        <section className="cart">
            <div className="cart__header">
                <div className="cart__header-main">
                    <i className="cart__header-main-icon material-icons">shopping_cart</i>
                    <h3 className="cart__header-main-title">Your Oredr</h3>
                </div>
                <p className="cart__header-close cart__header-close--hidden">
                    <i className="cart__header-close-icon fa fa-times"></i>
                </p>
            </div>
            <div className="cart__items">
                <article className="cart__item">
                    <div className="cart__item-detail">
                        <p className="cart__item-name">Double Cheese Burger</p>
                        <p className="cart__item-price">75.00 EGP</p>
                    </div>
                    <div className="cart__item-controls">
                        <div className="cart__item-controls-btn cart__item-controls-btn-remove">-</div>
                        <p className="cart__item-controls-count">1</p>
                        <div className="cart__item-controls-btn cart__item-controls-btn-add">+</div>
                    </div>
                </article>
                <article className="cart__item">
                    <div className="cart__item-detail">
                        <p className="cart__item-name">Large Coca Cola</p>
                        <p className="cart__item-price">20.00 EGP</p>
                    </div>
                    <div className="cart__item-controls">
                        <div className="cart__item-controls-btn cart__item-controls-btn-remove">-</div>
                        <p className="cart__item-controls-count">1</p>
                        <div className="cart__item-controls-btn cart__item-controls-btn-add">+</div>
                    </div>
                </article>
            </div>
            <div className="cart__pricing">
                <div className="cart__pricing-box cart__pricing-box-subtotal">
                    <p className="cart__pricing-box__title">subtotal</p>
                    <p className="cart__pricing-box__value">95.00 EGP</p>
                </div>
                <div className="cart__pricing-box cart__pricing-box-delivery">
                    <p className="cart__pricing-box__title">delivery fee</p>
                    <p className="cart__pricing-box__value">10.00 EGP</p>
                </div>
                <div className="cart__pricing-box cart__pricing-box-total">
                    <p className="cart__pricing-box__title">Total</p>
                    <p className="cart__pricing-box__value">105.00 EGP</p>
                </div>
            </div>
            <div className="cart__submit">
                <button className="cart__submit-btn">Place Order</button>
            </div>
        </section>
    );
}

export default Cart;