function CartButton(props) {
    return(
        <div className="cart-btn">
            <img alt="Cart" height="27" className="cart-btn__img"
                src="https://trycarriage.global.ssl.fastly.net/assets/v2/shopping_cart_icon_white-9c4c2230af01610868ccb639a00b01bb.svg"
                title="Cart" width="30" />
            <em className="cart-btn__item-count">0</em>
        </div>
    );
}

export default CartButton;